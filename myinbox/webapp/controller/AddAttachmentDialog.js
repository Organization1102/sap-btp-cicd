sap.ui.define([
	"sap/ui/base/ManagedObject",
	"sap/m/MessageBox",
	"./utilities",
	"sap/ui/core/routing/History"
], function(ManagedObject, MessageBox, Utilities, History) {

	return ManagedObject.extend("kupit.flexiblewf.myinbox.controller.AddAttachmentDialog", {
		constructor: function(oView) {
			this._oView = oView;
			this._oControl = sap.ui.xmlfragment(oView.getId(), "kupit.flexiblewf.myinbox.view.AddAttachmentDialog", this);
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
			reader.onload = jQuery.proxy(function(evn) {  
				var oModel = this.getOwnerComponent().getModel();
				var userInfo = this.getOwnerComponent().getModel("userInfo").getData()
				var fileContent= evn.target.result; //fileContent
				var myFile = oModel.getProperty("/newAttachment");
				
				var newFileRow = new Object();
				newFileRow.fileName = myFile.fileDescriptor.name;
				newFileRow.fileType = myFile.fileDescriptor.type;
				newFileRow.fileSize = myFile.fileDescriptor.size;
				newFileRow.fileDescription = myFile.fileDescription;
				newFileRow.fileContent = fileContent;
				newFileRow.fileUser = userInfo.email;
				var attList=oModel.getProperty("/createNewObject/createWFAttachments");
				attList.push(newFileRow);
				oModel.setProperty("/createNewObject/createWFAttachments",attList);
				oModel.setProperty("/createNewObject/createWFAttachmentsCount",attList.length);
				var oAttListTable = this.getView().byId("createWFAttachmentsTable");
				oAttListTable.getBinding("items").refresh();
				oFileUploader.clear();
				that.close();

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
