sap.ui.define([
	"sap/ui/base/ManagedObject",
	"sap/m/MessageBox",
	"./utilities",
	"sap/ui/core/routing/History",
	"./SelectDialog1",
	"./SelectDialogWorkday"
], function(ManagedObject, MessageBox, Utilities, History, SelectDialog1, SelectDialogWorkday) {

	return ManagedObject.extend("kupit.flexiblewf.myinbox.controller.AddApproverRealDialog", {
		constructor: function(oView) {
			this._oView = oView;
			this._oControl = sap.ui.xmlfragment(oView.getId(), "kupit.flexiblewf.myinbox.view.AddApproverRealDialog", this);
			this._bInit = false;
		},

		exit: function() {
			delete this._oView;
		},

		getView: function() {
			return this._oView;
		},

		getControl: function() {
			return this._oControl;
		},

		getOwnerComponent: function() {
			return this._oView.getController().getOwnerComponent();
		},

		open: function() {
			var oView = this._oView;
			var oControl = this._oControl;

			if (!this._bInit) {

				// Initialize our fragment
				this.onInit();

				this._bInit = true;

				// connect fragment to the root view of this component (models, lifecycle)
				oView.addDependent(oControl);
			}

			var oModel = this.getOwnerComponent().getModel();
			var newApprover = new Object();
			newApprover.level = this.getControl().data("apprLevel");
			oModel.setProperty("/newApprover",newApprover);
			

			var args = Array.prototype.slice.call(arguments);
			if (oControl.open) {
				oControl.open.apply(oControl, args);
			} else if (oControl.openBy) {
				oControl.openBy.apply(oControl, args);
			}
		},

		close: function() {
			this._oControl.close();
		},

		setRouter: function(oRouter) {
			this.oRouter = oRouter;

		},
		getBindingParameters: function() {
			return {};

		},
		_onInputValueHelpRequest: function(oEvent) {

			var sSelectDialogName = "SelectDialog1";
			this.mSelectDialogs = this.mSelectDialogs || {};
			var oSelectDialog = this.mSelectDialogs[sSelectDialogName];
			var oSource = oEvent.getSource();

			if (!oSelectDialog) {
				oSelectDialog = new SelectDialog1(this.getView());
				this.mSelectDialogs[sSelectDialogName] = oSelectDialog;

				// For navigation.
				oSelectDialog.setRouter(this.oRouter);
			}
			var fnCancel = function() {
				oSelectDialog.getControl().detachConfirm(fnConfirm);
				oSelectDialog.getControl().detachCancel(fnCancel);
			}.bind(this);
			var fnConfirm = async function(oConfirmEvent) {
				fnCancel();
				if (oSelectDialog.getControl().getBinding("items")) {
					this.getView().byId("AddApproverRealDialog").setBusy(true);
					var oModel = this.getOwnerComponent().getModel();
					var oBindingContext = oConfirmEvent.getParameter("selectedItem").getBindingContext();
					var sPath = oSelectDialog.getControl().data("selectedPropertyPath");
					oSource.setValue(oBindingContext.getProperty(sPath).userName);
					var selectedAppr = oBindingContext.getProperty(sPath);
					
					if ( selectedAppr.mail != undefined && selectedAppr.mail != null && selectedAppr.mail[0] != undefined && selectedAppr.mail[0]!= null ){
						var email = selectedAppr.mail;
						oModel.setProperty("/newApprover/teamsEmail",email);
						oModel.setProperty("/newApprover/approverName",email);
						var resWD = await this._readWorkDayService(email);
						if (resWD.data.length > 1){
							oModel.setProperty("/UtentiWorkday",resWD.data);
							this._onInputWorkdayValueHelpRequest(oSource);
						} else {
							this.getView().byId("AddApproverRealDialog").setBusy(false);
							if (resWD.data != undefined && resWD.data.length == 1){
								oModel.setProperty("/newApprover/workdayRole",resWD.data[0]["wd:Descrizione_Posizione"]);
								selectedAppr.ID_Posizione = resWD.data[0]["wd:ID_Posizione"];
								selectedAppr.Descrizione_Posizione = resWD.data[0]["wd:Descrizione_Posizione"];
							} else {
								oModel.setProperty("/newApprover/workdayRole","");
							}
						}
					}
					
					oModel.setProperty("/tempApproverUser",selectedAppr);
				}
			}.bind(this);
			oSelectDialog.getControl().attachConfirm(fnConfirm);
			oSelectDialog.getControl().attachCancel(fnCancel);
			oSelectDialog.open();
			oSelectDialog.getControl().fireLiveChange();

		},

		_readWorkDayServiceCPI: function(email){
			return new Promise(function(fnResolve) {

				// var workdayApiTokenUrl = this.getOwnerComponent().getTrueDestPath("workdaycpitoken"); 
				// jQuery.ajax({
				// 	method: "GET",
				// 	url: workdayApiTokenUrl,
				// 	cache: true,
				// 	dataType: "json",
				// 	async: true,
				// 	success: jQuery.proxy(function (dataToken) {


				// 		var sQuery = "?Mail_Dipendente="+email+"";
				// 		//var sQuery = "?nome=Mirko";
				// 		var tokennn = dataToken.authTokens[0].value;
							// beforeSend: function (xhr) {
							// 	xhr.setRequestHeader('Authorization', 'Bearer '+tokennn);
							// },
				// 		var workdayApiUrl = dataToken.destinationConfiguration.URL+"/CR_Get_Position_Details";

						var workdayApiUrl = this.getOwnerComponent().getTrueDestPath("workdaycpi") +"CR_Get_Position_Details"; 
						jQuery.ajax({
							method: "POST",
							url: workdayApiUrl,
							cache: true,
							dataType: "json",
							accepts: "text",
							async: true,

							data: {},
							success: jQuery.proxy(function (data) {
								var xmlmod = jQuery.xml2json(data);
								if (xmlmod.Report_Entry!= undefined && xmlmod.Report_Entry!= null){
									if (xmlmod.Report_Entry instanceof Array){
										fnResolve ({ status: "OK", data: xmlmod.Report_Entry });
									} else {
										fnResolve ({ status: "OK", data: [ xmlmod.Report_Entry ] });
									}
								} else {
									fnResolve ({ status: "OK", data: [] });
								}

							}, this),
							error: jQuery.proxy(function (error) {

								fnResolve({status: "KO", data: [], message: error});
								//reject(error);
								
							}, this),
						});
				// 	}, this),
				// 	error: jQuery.proxy(function (error) {

				// 		fnResolve({status: "KO", data: [], message: error});
				// 		//reject(error);
						
				// 	}, this),
				// });
			}.bind(this))
		},

		_readWorkDayService: function(email){
			return new Promise(function(fnResolve) {

				var appPath= this.getOwnerComponent().getTrueDestPath("hanaodatav4");
				var token=  Utilities.fetchTokenOV4(this.getView().getController());

				var wdObj = {
					ID_Position: "",
					Position_Description: "",
					Name: "",
					Surname: "",
					Employee_Mail: email,
					Username: ""
				};

				var wdObjStr = JSON.stringify(wdObj)

				var body = { wdBodyString : wdObjStr  };

				var workdayApiUrl = appPath+"WDUser";
						jQuery.ajax({
							method: "POST",
							url: workdayApiUrl,
							cache: false,
							contentType: "application/json",
							async: true,
							headers: {
								"X-CSRF-Token": token
							},
							data: JSON.stringify(body) ,
							success: jQuery.proxy(function (data) {
								var xmlmod = JSON.parse(data.content);
								if (xmlmod["wd:Report_Data"]!= undefined && xmlmod["wd:Report_Data"]!= null && xmlmod["wd:Report_Data"]["wd:Report_Entry"]!= undefined && xmlmod["wd:Report_Data"]["wd:Report_Entry"]!= null){
									if (xmlmod["wd:Report_Data"]["wd:Report_Entry"] instanceof Array){
										fnResolve ({ status: "OK", data: xmlmod["wd:Report_Data"]["wd:Report_Entry"] });
									} else {
										fnResolve ({ status: "OK", data: [ xmlmod["wd:Report_Data"]["wd:Report_Entry"] ] });
									}
								} else {
									fnResolve ({ status: "OK", data: [] });
								}

							}, this),
							error: jQuery.proxy(function (error) {

								fnResolve({status: "KO", data: [], message: error});
								//reject(error);
								
							}, this),
						});
				// 	}, this),
				// 	error: jQuery.proxy(function (error) {

				// 		fnResolve({status: "KO", data: [], message: error});
				// 		//reject(error);
						
				// 	}, this),
				// });
			}.bind(this))
		},

		_onInputWorkdayValueHelpRequest: function(oSource) {

			var sSelectDialogName = "SelectDialogWorkday";
			this.mSelectDialogs = this.mSelectDialogs || {};
			var oSelectDialog = this.mSelectDialogs[sSelectDialogName];
			var oSource = oSource;

			if (!oSelectDialog) {
				oSelectDialog = new SelectDialogWorkday(this.getView());
				this.mSelectDialogs[sSelectDialogName] = oSelectDialog;

				// For navigation.
				oSelectDialog.setRouter(this.oRouter);
			}
			var fnCancelWD = function() {
				this.getView().byId("AddApproverRealDialog").setBusy(false);
				oSelectDialog.getControl().detachConfirm(fnConfirmWD);
				oSelectDialog.getControl().detachCancel(fnCancelWD);
			}.bind(this);
			var fnConfirmWD = async function(oConfirmEvent) {
				fnCancelWD();
				this.getView().byId("AddApproverRealDialog").setBusy(false);
				if (oSelectDialog.getControl().getBinding("items")) {
					var oBindingContext = oConfirmEvent.getParameter("selectedItem").getBindingContext();
					var sPath = oSelectDialog.getControl().data("selectedPropertyPath");
					var selectedPosition = oBindingContext.getProperty(sPath);
					var oModel = this.getOwnerComponent().getModel();
					var user = oModel.getProperty("/tempApproverUser",);
					user.ID_Posizione = selectedPosition["wd:ID_Posizione"];
					user.Descrizione_Posizione = selectedPosition["wd:Descrizione_Posizione"];
					oModel.setProperty("/tempApproverUser",user);
					oModel.setProperty("/newApprover/workdayRole",selectedPosition["wd:Descrizione_Posizione"]);
				}
			}.bind(this);
			oSelectDialog.getControl().attachConfirm(fnConfirmWD);
			oSelectDialog.getControl().attachCancel(fnCancelWD);
			oSelectDialog.open();
			//oSelectDialog.getControl().fireLiveChange();

		},

		_onOkPress: function() {
			var oModel = this.getOwnerComponent().getModel();
			var oHanaModel = this.getOwnerComponent().getModel("hanaodata");
			var userInfo = this.getOwnerComponent().getModel("userInfo").getData()
			var hanaObj = this.getView().getBindingContext("hanaodata").getProperty("");
			var myAppr = oModel.getProperty("/newApprover");
			var selectedAppr = oModel.getProperty("/tempApproverUser");
			
			var newApprRow = new Object();
			newApprRow.WorkflowID = hanaObj.WorkflowID;
			newApprRow.level = myAppr.level;
			newApprRow.username= selectedAppr.userPrincipalName;
			newApprRow.surname = selectedAppr.surname;
			newApprRow.name = selectedAppr.givenName;
			newApprRow.ID_Posizione = selectedAppr.ID_Posizione;
			newApprRow.Descrizione_Posizione = selectedAppr.Descrizione_Posizione;
			/*if ( selectedAppr.emails != undefined && selectedAppr.emails != null && selectedAppr.emails[0] != undefined && selectedAppr.emails[0]!= null ){
				newApprRow.email = selectedAppr.emails[0].value;
			}*/
			if (myAppr.teamsEmail!= null && myAppr.teamsEmail!= undefined && myAppr.teamsEmail!= "" ){
				newApprRow.email = myAppr.teamsEmail;
			}
			//var apprList=oModel.getProperty("/createNewObject/createWFApprovers"+myAppr.level);
			//apprList.push(newApprRow);
			//oModel.setProperty("/createNewObject/createWFApprovers"+myAppr.level,apprList);
			oHanaModel.create("/Approver",newApprRow, {
				success: jQuery.proxy(function(oData) {
					var oApprListTable = this.getView().byId("approveWFApprovers"+myAppr.level+"Table");
					oApprListTable.getBinding("items").refresh();
					this.close();
				},this),
				error: jQuery.proxy(function(oError) {
					this.close();
				},this)
			});

			

		},
		_onCancelPress: function() {

			this.close();

		},
		onInit: function() {
			this.getView().byId("AddApproverRealDialog").setBusyIndicatorDelay(10);
			this._oDialog = this.getControl();

		},
		onExit: function() {
			this._oDialog.destroy();

		}

	});
}, /* bExport= */ true);
