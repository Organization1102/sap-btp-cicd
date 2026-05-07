sap.ui.define(["sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"./utilities",
	"sap/ui/core/routing/History"
], function(BaseController, MessageBox, Utilities, History) {
	"use strict";

	return BaseController.extend("kupit.flexiblewf.myinbox.controller.WfListMaster", {
		handleRouteMatched: function(oEvent) {
			var sAppId = "App63933c6bfa151401ccc5c278";

			var oParams = {};
			var oView = this.getView();
			var bSelectFirstListItem = true;
			if (oEvent.mParameters.data.context || oEvent.mParameters.data.masterContext) {
				this.sContext = oEvent.mParameters.data.context;

				this.sMasterContext = oEvent.mParameters.data.masterContext;

			} else {
				if (this.getOwnerComponent().getComponentData()) {
					var patternConvert = function(oParam) {
						if (Object.keys(oParam).length !== 0) {
							for (var prop in oParam) {
								if (prop !== "sourcePrototype" && prop.includes("Set")) {
									return prop + "(" + oParam[prop][0] + ")";
								}
							}
						}
					};

					this.sMasterContext = patternConvert(this.getOwnerComponent().getComponentData().startupParameters);

				}
				this.sContext = undefined;
			}

			var oPath;

			var oModel = this.getOwnerComponent().getModel();
			var oDataModel =this.getOwnerComponent().getModel("bpmworkflowruntimeodata");
			var oHanaModel =this.getOwnerComponent().getModel("hanaodata");

			/*oHanaModel.read("/MyTask",{ filters: [new sap.ui.model.Filter({
					path: "status",
					operator: sap.ui.model.FilterOperator.EQ,
					value1: null
		 		})], urlParameters: { "$expand": "workflow,workflow/ToApprovers,,workflow/ToComments"}});*/

			/*if (this.sMasterContext && oEvent.getParameters().config.bypassed.target[0] !== this.sMasterContext) {
				oPath = {
					path: "/" + this.sMasterContext,
					parameters: oParams
				};
				this.getView().bindObject(oPath);
			} else if (this.sContext) {
				var sCurrentContextPath = "/" + this.sContext;

				bSelectFirstListItem = false;
			}*/
			var routeName ;
			if (oEvent.mParameters.data !=undefined && oEvent.mParameters.data.routeConfig !=undefined && oEvent.mParameters.data.routeConfig.name !=undefined ){
				routeName = oEvent.mParameters.data.routeConfig.name;
			}


			if ( routeName != "CreateWfDetail"){
				bSelectFirstListItem = true;
			} else {
				bSelectFirstListItem = false;
				
			}


			/*if (routeName == "WfListMaster"){
				var oList = this.byId("userTaskList");
				var oBinding = oList.getBinding("items");
				oBinding.refresh();
			}*/

			if (bSelectFirstListItem) {
				/*oView.addEventDelegate({
					onBeforeShow: function() {*/
						var oContent = this.getView().getContent();
						if (oContent) {
							if (!sap.ui.Device.system.phone) {
								var oList = this.getView().byId("userTaskList") ;
								if (oList) {
									var sContentName = oList.getMetadata().getName();
									if (sContentName.indexOf("List") > -1) {
										oList.getBinding("items").attachEventOnce("dataReceived", function(oEventChange) {
											if (this.sContext){
												var oCurListItem = oList.getItems();
												var selectedKeys = this.sContext.split("-");
												for (var j=0;j<oCurListItem.length;j++){
													var itemData = oCurListItem[j].getBindingContext().getProperty("");
													if (itemData.WorkflowID == selectedKeys[0] && itemData.level == selectedKeys[1] && itemData.numb == selectedKeys[2] ){
														oList.setSelectedItem(oCurListItem[j]);
														break;
													}
												}
											}else{
												var oFirstListItem = oList.getItems()[0];
												if (oFirstListItem) {
													oList.setSelectedItem(oFirstListItem);
													oList.fireItemPress({
														listItem: oFirstListItem
													});
												}
											}
										}.bind(this));
									}
								}
							}
						}
					/*}.bind(this)
				});*/
			} 

			this.oRefreshTaskList();

		},

		onSwitchToApprovedMode: function(oEvent){

			this.oRefreshTaskList(true);

			

		},

		_onRefreshButtonPress: function(oEvent){

			this.oRefreshTaskList(true);

			

		},

		handleSelectionFilterFinish: function(oEvent){
			this.oRefreshTaskList(true);

		},

		oRefreshTaskList: function(switchMode){
			var oModel = this.getOwnerComponent().getModel();
			var oHanaModel = this.getOwnerComponent().getModel("hanaodatav4");
			var currentUserModel = this.getOwnerComponent().getModel("userInfo");

			var currentUser= currentUserModel.getProperty("/name");

			var filterArray = [];
			var hasPending = false;

			var multiComboCont=this.getView().byId("filterWorkflowStatus");
			var multiComboSel= multiComboCont.getSelectedItems();

			for (var z=0;z<multiComboSel.length;z++){
				switch (multiComboSel[z].getKey()) {
					case 'DRAFT':
						var filter = "status eq 'DRAFT'";
						/*var filter = new sap.ui.model.Filter({
							path: "status",
							operator: sap.ui.model.FilterOperator.EQ,
							value1: 'DRAFT'
						 });*/
						break;
					case 'PENDING':
						hasPending = true;
						var filter = "ToApprovers/any(d:(d/status eq 'PENDING' and d/username eq '"+currentUser+"'))";
						/*var filter =   new sap.ui.model.Filter({
							path: 'ToApprovers',
							operator: sap.ui.model.FilterOperator.Any,
							variable: 'appr',
							condition: new sap.ui.model.Filter({
							  path: 'appr/status',
							  operator: sap.ui.model.FilterOperator.EQ,
							  value1: 'PENDING'
							})
						  });*/
						break;
					case 'INPROGRESS':
						var filter = "ToApprovers/any(d:(d/status eq 'PENDING' and d/username ne '"+currentUser+"'))";
						/*var filter =   new sap.ui.model.Filter({
							path: 'ToApprovers',
							operator: sap.ui.model.FilterOperator.All,
							variable: 'appr',
							condition: new sap.ui.model.Filter({
							  path: 'appr/status',
							  operator: sap.ui.model.FilterOperator.NE,
							  value1: 'PENDING'
							})
						  });*/
						break;
					case 'CLOSED':
						var filter = "status eq 'APPROVED' or status eq 'REJECTED'";
						/*var filter = new sap.ui.model.Filter({
							path: "status",
							operator: sap.ui.model.FilterOperator.EQ,
							value1: 'CLOSED'
						 });*/
						break;
					default:
						break;
				}

				filterArray.push(filter);
			}

			if (multiComboSel.length == 0) hasPending = true;

			//var allFilters = ( filterArray.length ==0 ? [] : [new sap.ui.model.Filter(filterArray, false)] );
			//var masterPath= "/Workflow";
			//var urlParameters = { "$expand": "ToApprovers"};
			var baseUrlOv4 = this.getOwnerComponent().getTrueDestPath("hanaodatav4");
			var urlOdata= baseUrlOv4+"Workflow?$expand=ToApprovers";
			var filterString ="";

			if (filterArray.length > 0) {
				urlOdata = urlOdata + "&$filter="

				for (var z=0;z<filterArray.length;z++){
					if (filterString != ""){
						filterString = filterString + " or ";
					}
					filterString = filterString + filterArray[z]
				}

				urlOdata = urlOdata + filterString ;
			}

			


			/*if (this.getOwnerComponent().getModel().getProperty("/toBeApproved")){
				var masterPath= "/MyTask";
				var urlParameters = { "$expand": "workflow,workflow/ToApprovers,workflow/ToComments"};
				var filterArray = [new sap.ui.model.Filter({
					path: "status",
					operator: sap.ui.model.FilterOperator.EQ,
					value1: null
		 		})];
			} else {
				var masterPath= "/Workflow";
				var urlParameters = { "$expand": "ToApprovers"};
				var filterArray = [];
			}*/

			this.getView().byId("userTaskList").setBusy(true);
			jQuery.ajax({
				method: "GET",
				url: urlOdata,
				cache: false,
				contentType: "application/json",
				async: true,
				headers: {
					"X-CSRF-Token": "fetch"
				},
				success: function (oDataTask){

					if (hasPending){
						var baseUrlWFO = this.getOwnerComponent().getTrueDestPath("bpmworkflowruntimeodata");
						var url = baseUrlWFO+"TaskCollection?$format=json&$expand=CustomAttributeData";
						jQuery.ajax({
							method: "GET",
							url: url,
							cache: false,
							contentType: "application/json",
							async: true,
							headers: {
								"X-CSRF-Token": "fetch"
							},
							//data: JSON.stringify(body),
							success: jQuery.proxy(function (data) {
								var okList = new Array();
								var matchItem = 0;
								for (var i=0;i<oDataTask.value.length;i++){
									oDataTask.value[i].username = oDataTask.value[i].createdBy;
									oDataTask.value[i].workflow = new Object();
									oDataTask.value[i].workflow.subject = oDataTask.value[i].subject;
									oDataTask.value[i].workflow.additionalInfo = oDataTask.value[i].additionalInfo;
									oDataTask.value[i].workflow.fullDescription = oDataTask.value[i].fullDescription;
									oDataTask.value[i].workflow.status = oDataTask.value[i].status;
									oDataTask.value[i].isPending = false;
									var minLevelNull = 4;
									var selAppr = null;
									for (var l=0;l<oDataTask.value[i].ToApprovers.length;l++){
										var apprCurr= oDataTask.value[i].ToApprovers[l];
										for (var j=0;j<data.d.results.length;j++){
											var oDataItem = oDataTask.value[i].ToApprovers[l];
											var oTaskCollItem = data.d.results[j];
											matchItem = 0;
											
											for(var k=0;k<oTaskCollItem.CustomAttributeData.results.length;k++){
												var custAttrItem=oTaskCollItem.CustomAttributeData.results[k];
												if (custAttrItem.Name == "hana_id" && custAttrItem.Value == oDataItem.WorkflowID){
													matchItem = matchItem + 1;
												}
												if (custAttrItem.Name == "level" && custAttrItem.Value == oDataItem.level){
													matchItem = matchItem + 1;
												}
												if (custAttrItem.Name == "number" && custAttrItem.Value == oDataItem.numb){
													matchItem = matchItem + 1;
												}
											
												if (matchItem == 3){
													oDataTask.value[i].isPending =true;
													//okList.push (oDataItem);
													selAppr = apprCurr;
													minLevelNull = apprCurr.level;
												}
											}

										}

										oDataTask.value[i].level = apprCurr.level;
										oDataTask.value[i].numb = apprCurr.numb;
										
										

										if ( ( apprCurr.status == null || apprCurr.status == undefined ) && selAppr == null ){
											if (apprCurr.level < minLevelNull){
												selAppr = apprCurr;
												minLevelNull = apprCurr.level;
											}
										}
									}
									if (selAppr != null){
										oDataTask.value[i].level = minLevelNull;
										oDataTask.value[i].numb = selAppr.numb;
									} 

								}
								oModel.setProperty("/MyTaskShown",oDataTask.value);
								this.getView().byId("userTaskList").setBusy(false);
								var oList = this.getView().byId("userTaskList") ;
								oList.getBinding("items").fireDataReceived({ data: oDataTask.value });
								/*if (switchMode){
									//var oBindingContext = oEvent.getSource().getBindingContext();
									return new Promise(function(fnResolve) {
										this.getOwnerComponent().getModel().setProperty("/selectedTaskInbox", undefined);
										this.doNavigate("WfListMaster", undefined, fnResolve, "");
									}.bind(this)).catch(function(err) {
										if (err !== undefined) {
											MessageBox.error(err.message);
										}
									});
								}*/
							}, this),
							error: jQuery.proxy(function (error) {
								this.getView().byId("userTaskList").setBusy(false);
							}, this),
						});
					} else {
						for (var i=0;i<oDataTask.value.length;i++){
							oDataTask.value[i].username = oDataTask.value[i].createdBy;
							oDataTask.value[i].workflow = new Object();
							oDataTask.value[i].workflow.subject = oDataTask.value[i].subject;
							oDataTask.value[i].workflow.additionalInfo = oDataTask.value[i].additionalInfo;
							oDataTask.value[i].workflow.fullDescription = oDataTask.value[i].fullDescription;
							oDataTask.value[i].workflow.status = oDataTask.value[i].status;
							oDataTask.value[i].isPending = false;
							var minLevelNull = 4;
							var selAppr = null;
							for (var k=0;k<oDataTask.value[i].ToApprovers.length;k++){
								var apprCurr= oDataTask.value[i].ToApprovers[k];

								oDataTask.value[i].level = apprCurr.level;
								oDataTask.value[i].numb = apprCurr.numb;

								if (apprCurr.status == null || apprCurr.status == undefined ){
									if (apprCurr.level < minLevelNull){
										selAppr = apprCurr;
										minLevelNull = apprCurr.level;
									}
								}
							}
							if (selAppr != null){
								oDataTask.value[i].level = minLevelNull;
								oDataTask.value[i].numb = selAppr.numb;
							}
						}
						oModel.setProperty("/MyTaskShown",oDataTask.value);
						var oList = this.getView().byId("userTaskList") ;
						oList.getBinding("items").fireDataReceived({ data: oDataTask.value });
						this.getView().byId("userTaskList").setBusy(false);
					}
					
				}.bind(this),
				error: jQuery.proxy(function (error) {
					this.getView().byId("userTaskList").setBusy(false);
				}, this)
			})
		},

		oRefreshTaskListOld: function(switchMode){
			var oModel = this.getOwnerComponent().getModel();
			var oHanaModel = this.getOwnerComponent().getModel("hanaodata");
			if (this.getOwnerComponent().getModel().getProperty("/toBeApproved")){
				var masterPath= "/MyTask";
				var urlParameters = { "$expand": "workflow,workflow/ToApprovers,workflow/ToComments"};
				var filterArray = [new sap.ui.model.Filter({
					path: "status",
					operator: sap.ui.model.FilterOperator.EQ,
					value1: null
		 		})];
			} else {
				var masterPath= "/Workflow";
				var urlParameters = { "$expand": "ToApprovers"};
				var filterArray = [];
			}

			this.getView().byId("userTaskList").setBusy(true);
			oHanaModel.read(masterPath,{
				success: function (oDataTask){

					if (this.getOwnerComponent().getModel().getProperty("/toBeApproved")){
						var baseUrlWFO = this.getOwnerComponent().getTrueDestPath("bpmworkflowruntimeodata");
						var url = baseUrlWFO+"TaskCollection?$format=json&$expand=CustomAttributeData";
						jQuery.ajax({
							method: "GET",
							url: url,
							cache: false,
							contentType: "application/json",
							async: true,
							headers: {
								"X-CSRF-Token": "fetch"
							},
							//data: JSON.stringify(body),
							success: jQuery.proxy(function (data) {
								var okList = new Array();
								for (var i=0;i<oDataTask.results.length;i++){
									for (var j=0;j<data.d.results.length;j++){
										var oDataItem = oDataTask.results[i];
										var oTaskCollItem = data.d.results[j];
										var matchItem = 0;
										for(var k=0;k<oTaskCollItem.CustomAttributeData.results.length;k++){
											var custAttrItem=oTaskCollItem.CustomAttributeData.results[k];
											if (custAttrItem.Name == "hana_id" && custAttrItem.Value == oDataItem.WorkflowID){
												matchItem = matchItem + 1;
											}
											if (custAttrItem.Name == "level" && custAttrItem.Value == oDataItem.level){
												matchItem = matchItem + 1;
											}
											if (custAttrItem.Name == "number" && custAttrItem.Value == oDataItem.numb){
												matchItem = matchItem + 1;
											}
										}
										if (matchItem == 3){
											okList.push (oDataItem);
										}


										//if (oDataItem.WorkflowID == oTaskCollItem.)
									}
								}
								oModel.setProperty("/MyTaskShown",okList);
								this.getView().byId("userTaskList").setBusy(false);
								var oList = this.getView().byId("userTaskList") ;
								oList.getBinding("items").fireDataReceived({ data: okList });
								if (switchMode){
									//var oBindingContext = oEvent.getSource().getBindingContext();
									return new Promise(function(fnResolve) {
										this.getOwnerComponent().getModel().setProperty("/selectedTaskInbox", undefined);
										this.doNavigate("WfListMaster", undefined, fnResolve, "");
									}.bind(this)).catch(function(err) {
										if (err !== undefined) {
											MessageBox.error(err.message);
										}
									});
								}
							}, this),
							error: jQuery.proxy(function (error) {
								this.getView().byId("userTaskList").setBusy(false);
							}, this),
						});
					} else {
						for (var i=0;i<oDataTask.results.length;i++){
							oDataTask.results[i].username = oDataTask.results[i].createdBy;
							oDataTask.results[i].workflow = new Object();
							oDataTask.results[i].workflow.subject = oDataTask.results[i].subject;
							oDataTask.results[i].workflow.additionalInfo = oDataTask.results[i].additionalInfo;
							oDataTask.results[i].workflow.fullDescription = oDataTask.results[i].fullDescription;
							oDataTask.results[i].workflow.status = oDataTask.results[i].status;
							var minLevelNull = 4;
							var selAppr = null;
							for (var k=0;k<oDataTask.results[i].ToApprovers.results.length;k++){
								var apprCurr= oDataTask.results[i].ToApprovers.results[k];

								if (apprCurr.status == null || apprCurr.status == undefined ){
									if (apprCurr.level < minLevelNull){
										selAppr = apprCurr;
										minLevelNull = apprCurr.level;
									}
								}
							}
							if (selAppr != null){
								oDataTask.results[i].level = minLevelNull;
								oDataTask.results[i].numb = selAppr.numb;
							}
						}
						oModel.setProperty("/MyTaskShown",oDataTask.results);
						var oList = this.getView().byId("userTaskList") ;
						oList.getBinding("items").fireDataReceived({ data: oDataTask.results });
						this.getView().byId("userTaskList").setBusy(false);
					}
					
				}.bind(this),
				error: jQuery.proxy(function (error) {
					this.getView().byId("userTaskList").setBusy(false);
				}, this),
				filters: filterArray, urlParameters: urlParameters
			})
		},
		_attachSelectListItemWithContextPath: function(sContextPath) {
			var oView = this.getView();
			var oContent = this.getView().getContent();
			if (oContent) {
				if (!sap.ui.Device.system.phone) {
					var oList = this.getView().byId("userTaskList");
					if (oList && sContextPath) {
						var sContentName = oList.getMetadata().getName();
						var oItemToSelect, oItem, oContext, aItems, i;
						if (sContentName.indexOf("List") > -1) {
							if (oList.getItems().length) {
								oItemToSelect = null;
								aItems = oList.getItems();
								for (i = 0; i < aItems.length; i++) {
									oItem = aItems[i];
									oContext = oItem.getBindingContext();
									if (oContext && oContext.getPath() === sContextPath) {
										oItemToSelect = oItem;
									}
								}
								if (oItemToSelect) {
									oList.setSelectedItem(oItemToSelect);
								}
							} else {
								oView.addEventDelegate({
									onBeforeShow: function() {
										oList.attachEventOnce("updateFinished", function() {
											oItemToSelect = null;
											aItems = oList.getItems();
											for (i = 0; i < aItems.length; i++) {
												oItem = aItems[i];
												oContext = oItem.getBindingContext();
												if (oContext && oContext.getPath() === sContextPath) {
													oItemToSelect = oItem;
												}
											}
											if (oItemToSelect) {
												oList.setSelectedItem(oItemToSelect);
											}
										});
									}
								});
							}
						}

					}
				}
			}

		},
		_onButtonPress: function(oEvent) {

			var oBindingContext = oEvent.getSource().getBindingContext();

			return new Promise(function(fnResolve) {
				this.getOwnerComponent().getModel().setProperty("/selectedTaskInbox", undefined);
				this.doNavigate("CreateWfDetail", oBindingContext, fnResolve, "");
			}.bind(this)).catch(function(err) {
				if (err !== undefined) {
					MessageBox.error(err.message);
				}
			});

		},

		formatStatusWF: function(data){
			switch (data) {
				case 'DRAFT':
					return 'NOT STARTED';
					break;
				case 'PENDING':
					return 'IN PROGRESS';
					break;
			
				default:
					return 'COMPLETED';
					break;
			}
		},
		doNavigate: function(sRouteName, oBindingContext, fnPromiseResolve, sViaRelation) {
			var sPath = (oBindingContext) ? oBindingContext.getPath() : null;
			var oModel = (oBindingContext) ? oBindingContext.getModel() : null;
/*
			var sEntityNameSet;
			if (sPath !== null && sPath !== "") {
				if (sPath.substring(0, 1) === "/") {
					sPath = sPath.substring(1);
				}
				sEntityNameSet = sPath.split("(")[0];
			}
			var sNavigationPropertyName;
			var sMasterContext = this.sMasterContext ? this.sMasterContext : sPath;

			if (sEntityNameSet !== null) {
				sNavigationPropertyName = sViaRelation || this.getOwnerComponent().getNavigationPropertyForNavigationWithContext(sEntityNameSet, sRouteName);
			}
			if (sNavigationPropertyName !== null && sNavigationPropertyName !== undefined) {
				if (sNavigationPropertyName === "") {
					this.oRouter.navTo(sRouteName, {
						context: sPath,
						masterContext: sMasterContext
					}, false);
				} else {
					oModel.createBindingContext(sNavigationPropertyName, oBindingContext, null, function(bindingContext) {
						if (bindingContext) {
							sPath = bindingContext.getPath();
							if (sPath.substring(0, 1) === "/") {
								sPath = sPath.substring(1);
							}
						} else {
							sPath = "undefined";
						}

						// If the navigation is a 1-n, sPath would be "undefined" as this is not supported in Build
						if (sPath === "undefined") {
							this.oRouter.navTo(sRouteName);
						} else {
							this.oRouter.navTo(sRouteName, {
								context: sPath,
								masterContext: sMasterContext
							}, false);
						}
					}.bind(this));
				}
			} else {
				this.oRouter.navTo(sRouteName);
			}*/
			if (oBindingContext === undefined) {
				this.oRouter.navTo(sRouteName);
			} else {
				var oItemHana = oBindingContext.getProperty("");
				this.oRouter.navTo(sRouteName, {
					context: oItemHana.WorkflowID+"-"+oItemHana.level+"-"+oItemHana.numb,
					//hana: oBindingContext.getProperty("").context.workflow_id
	//				masterContext: sMasterContext
				}, false);
			}

			if (typeof fnPromiseResolve === "function") {
				fnPromiseResolve();
			}

		},
		_onObjectListItemPress: function(oEvent) {

			//var oBindingContext = oEvent.getParameter("listItem").getBindingContext();
			var oEventCopy = jQuery.extend(true, {}, oEvent);
			var isCreating = this.getOwnerComponent().getModel().getProperty("/createFlag");
			if (isCreating != undefined){
				sap.m.MessageBox.show(
					"Do you want exit from creation?", {
						icon: MessageBox.Icon.INFORMATION,
						title: "Selection warning",
						actions: [MessageBox.Action.YES, MessageBox.Action.NO],
						emphasizedAction: MessageBox.Action.YES,
						onClose: jQuery.proxy(function (oAction) { 
							if (oAction == MessageBox.Action.YES){
								this.getOwnerComponent().getModel().setProperty("/createFlag",undefined);
								this._clickListItem(oEventCopy);
							}
						},this)
					}
				);
				return;
			} else {
				this._clickListItem(oEventCopy);
			}

		},

		_clickListItem: function(oEvent) {
			var oBindingContext = oEvent.getSource().getSelectedContexts()[0];

			return new Promise(function(fnResolve) {
				var selectedTaskInbox= jQuery.extend({}, oBindingContext.getProperty(""));
				/*var selectedTaskAttibutesKey = oBindingContext.getProperty("CustomAttributeData");
				var oDataModel =this.getOwnerComponent().getModel("bpmworkflowruntimeodata");
				for (var i=0;i<selectedTaskAttibutesKey.length;i++){
					var custAttr = oDataModel.getProperty("/"+selectedTaskAttibutesKey[i]);
					selectedTaskInbox[custAttr.Name] = custAttr.Value;
				}*/
				this.getOwnerComponent().getModel().setProperty("/selectedTaskInbox",selectedTaskInbox);
				this.doNavigate("ApproveWfDetail", oBindingContext, fnResolve, "");
			}.bind(this)).catch(function(err) {
				if (err !== undefined) {
					MessageBox.error(err.message);
				}
			});
		},

		onSearchList: function(oEvent){
			var aFilters = [];
			var sQuery = oEvent.getSource().getValue();
			if (sQuery && sQuery.length > 0) {
				var filter = new sap.ui.model.Filter("InstanceID", sap.ui.model.FilterOperator.Contains, sQuery);
				aFilters.push(filter);
			}

			// update list binding
			var oList = this.byId("userTaskList");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilters, "Application");
		},

		testPdf: function(oEvent){
			window.jsPDF = window.jspdf.jsPDF;
			var doc = new jsPDF();
			doc.text(20, 20, 'Hello world!');
			doc.text(20, 30, 'This is client-side Javascript to generate a PDF.');

			// Add new page
			doc.addPage();
			doc.text(20, 20, 'Visit CodexWorld.com');

			doc.save("provaxxx.pdf")
		},

		testPdfOld: function(oEvent){
			const doc = new PDFDocument();

			// Pipe its output somewhere, like to a file or HTTP response
			// See below for browser usage
			doc.pipe(blobStream())
			.on('finish', function() {
				// get a blob
				//var blob = this.toBlob();
				
				// or get a blob URL
				var url = this.toBlobURL();
				window.open(url);
			  });
			
			// Embed a font, set the font size, and render some text
			doc
			  .fontSize(25)
			  .text('Some text with an embedded font!', 100, 100);
			
			// Add an image, constrain it to a given size, and center it vertically and horizontally
			/*doc.image('path/to/image.png', {
			  fit: [250, 300],
			  align: 'center',
			  valign: 'center'
			});*/
			
			// Add another page
			doc
			  .addPage()
			  .fontSize(25)
			  .text('Here is some vector graphics...', 100, 100);
			
			// Draw a triangle
			doc
			  .save()
			  .moveTo(100, 150)
			  .lineTo(100, 250)
			  .lineTo(200, 250)
			  .fill('#FF3300');
			
			// Apply some transforms and render an SVG path with the 'even-odd' fill rule
			doc
			  .scale(0.6)
			  .translate(470, -380)
			  .path('M 250,75 L 323,301 131,161 369,161 177,301 z')
			  .fill('red', 'even-odd')
			  .restore();
			
			// Add some text with annotations
			doc
			  .addPage()
			  .fillColor('blue')
			  .text('Here is a link!', 100, 100)
			  .underline(100, 100, 160, 27, { color: '#0000FF' })
			  .link(100, 100, 160, 27, 'http://google.com/');
			
			// Finalize PDF file
			doc.end();
		},

		onInit: function() {
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.getView().byId("userTaskList").setBusyIndicatorDelay(10);
			this.getView().byId("filterWorkflowStatus").setSelectedKeys(["PENDING"]);

			this.oRouter.getTarget("WfListMaster").attachDisplay(jQuery.proxy(this.handleRouteMatched, this));

			this.getOwnerComponent().getModel().setProperty("/toBeApproved",true);
		},
		onExit: function() {

			// to destroy templates for bound aggregations when templateShareable is true on exit to prevent duplicateId issue
			var aControls = [{
				"controlId": "sap_List_Page_0-content-sap_m_ObjectList-1",
				"groups": ["items"]
			}];
			for (var i = 0; i < aControls.length; i++) {
				var oControl = this.getView().byId(aControls[i].controlId);
				if (oControl) {
					for (var j = 0; j < aControls[i].groups.length; j++) {
						var sAggregationName = aControls[i].groups[j];
						var oBindingInfo = oControl.getBindingInfo(sAggregationName);
						if (oBindingInfo) {
							var oTemplate = oBindingInfo.template;
							oTemplate.destroy();
						}
					}
				}
			}

		}
	});
}, /* bExport= */ true);
