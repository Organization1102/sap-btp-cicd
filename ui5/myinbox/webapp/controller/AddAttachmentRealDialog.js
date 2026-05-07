sap.ui.define([
	"sap/ui/base/ManagedObject",
	"sap/m/MessageBox",
	"./utilities",
	"sap/ui/core/routing/History"
], function(ManagedObject, MessageBox, Utilities, History) {

	return ManagedObject.extend("kupit.flexiblewf.myinbox.controller.AddAttachmentRealDialog", {
		constructor: function(oView) {
			this._oView = oView;
			this._oControl = sap.ui.xmlfragment(oView.getId(), "kupit.flexiblewf.myinbox.view.AddAttachmentRealDialog", this);
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
			oModel.setProperty("/newAttachment",new Object());

			var args = Array.prototype.slice.call(arguments);
			if (oControl.open) {
				oControl.open.apply(oControl, args);
			} else if (oControl.openBy) {
				oControl.openBy.apply(oControl, args);
			}
		},

		handleUploadComplete: function(oEvent) {
			/*var sResponse = oEvent.getParameter("response"),
				iHttpStatusCode = parseInt(/\d{3}/.exec(sResponse)[0]),
				sMessage;

			if (sResponse) {
				sMessage = iHttpStatusCode === 200 ? sResponse + " (Upload Success)" : sResponse + " (Upload Error)";
				MessageToast.show(sMessage);
			}*/
		},

		onFileUploadChange: function(oEvent){
			var oModel = this.getOwnerComponent().getModel();
			var file = oEvent.getParameter("files") && oEvent.getParameter("files")[0];
			oModel.setProperty("/newAttachment/fileDescriptor",file);
			
		},

		handleUploadPress: function() {


			/*oFileUploader.checkFileReadable().then(function() {
				var a=1;
				//oFileUploader.upload();
			}, function(error) {
				MessageToast.show("The file cannot be read. It may have changed.");
			}).then(function() {
				oFileUploader.clear();
			});*/
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

		_onOkPress: function() {
			var oFileUploader = this.getView().byId("fileUploader");
			var oModel = this.getOwnerComponent().getModel();

			var reader = new FileReader();  
			var that = this;  
			reader.onload = jQuery.proxy( function(evn) {  
				var readerUpload = new Promise( async function (resolve, reject) {
					var oModel = this.getOwnerComponent().getModel();
					var workflowHana = this.getView().getBindingContext("hanaodata").getProperty("");
					var userInfo = this.getOwnerComponent().getModel("userInfo").getData()
					var fileContent= evn.target.result; //fileContent
					var myFile = oModel.getProperty("/newAttachment");
					
					var newFileRow = new Object();
					newFileRow.fileName = myFile.fileDescriptor.name;
					newFileRow.fileType = myFile.fileDescriptor.type;
					newFileRow.fileDescription = myFile.fileDescription;
					newFileRow.fileContent = fileContent;
					newFileRow.fileSize = myFile.fileDescriptor.size;
					newFileRow.fileUser = userInfo.email;
					/*var attList=oModel.getProperty("/createNewObject/createWFAttachments");
					attList.push(newFileRow);
					oModel.setProperty("/createNewObject/createWFAttachments",attList);
					oModel.setProperty("/createNewObject/createWFAttachmentsCount",attList.length);
					var oAttListTable = this.getView().byId("approveWFAttachmentsTable");
					oAttListTable.getBinding("items").refresh();*/
					var baseUrlDS = this.getOwnerComponent().getTrueDestPath("docservice");
					var urldoc = baseUrlDS+"browser";
					var session = cmis.createSession(urldoc);

					this.getView().setBusy(true);
					var loadRep =  await  Utilities.loadRepositories(this,session);
					if (loadRep.status == "OK"){
						var repInfo =  await  Utilities.getRepositoryInfo(session);
						if (repInfo.status == "OK"){
							var objProva = await Utilities.getPath(session, session.defaultRepository.rootFolderId, "/ALLEGATIWF", "ALLEGATIWF");
							if (objProva.status == "OK"){
								var objWfFolder = await Utilities.getPath(session, objProva.answer.properties["cmis:objectId"].value, "/ALLEGATIWF/"+workflowHana.WorkflowID, workflowHana.WorkflowID);
								if (objWfFolder.status == "OK"){
									var docObj = await Utilities.createDocument(session, objWfFolder.answer.properties["cmis:objectId"].value, newFileRow);
									if (docObj.status=="OK"){
										var oDataModel = this.getOwnerComponent().getModel("hanaodata");
										var newAttFile = new Object();
										newAttFile.WorkflowID = workflowHana.WorkflowID;
										newAttFile.filename = newFileRow.fileName;
										newAttFile.description = newFileRow.fileDescription;
										newAttFile.documentID = docObj.answer.properties["cmis:objectId"].value;
										newAttFile.size = newFileRow.fileSize;

										oDataModel.create("/Attachment",newAttFile,{
											success: function (oData){
												this.getView().setBusy(false);
												this.getView().getController().getAttachmentList();
											}.bind(this),
											error: function (oError){
												this.getView().setBusy(false);
											}.bind(this)
										})
										
										oFileUploader.clear();
										that.close();
										resolve({ status : "OK", answer : docObj});
									} else {
										this.getView().setBusy(false);
									}
								} else {
									this.getView().setBusy(false);
								}
							} else {
								this.getView().setBusy(false);
							}
						} else {
							this.getView().setBusy(false);
						}
					} else {
						this.getView().setBusy(false);
					}
				
				}.bind(this));
				readerUpload.then( function(){

				});


			  },this);

			var myFile = oModel.getProperty("/newAttachment/fileDescriptor");
			reader.readAsArrayBuffer(myFile);  
			

		},
		_onCancelPress: function() {

			this.close();

		},
		onInit: function() {

			this._oDialog = this.getControl();

		},
		onExit: function() {
			this._oDialog.destroy();

		}

	});
}, /* bExport= */ true);
