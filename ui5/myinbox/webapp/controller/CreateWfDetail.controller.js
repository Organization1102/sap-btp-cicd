sap.ui.define(["sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"./AddApproverDialog",
	"./AddAttachmentDialog",
	"./utilities",
	"sap/ui/core/routing/History"
], function(BaseController, MessageBox, AddApproverDialog, AddAttachmentDialog, Utilities, History) {
	"use strict";

	return BaseController.extend("kupit.flexiblewf.myinbox.controller.CreateWfDetail", {
		handleRouteMatched: function(oEvent) {
			var sAppId = "App63933c6bfa151401ccc5c278";

			var oParams = {};

			if (oEvent.mParameters.data.context) {
				this.sContext = oEvent.mParameters.data.context;

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

					this.sContext = patternConvert(this.getOwnerComponent().getComponentData().startupParameters);

				}
			}

			var oPath;


			this.getOwnerComponent().getModel().setProperty("/createFlag","X");

			var createNewObject = new Object();
			createNewObject.createWFAttachments = [];
			createNewObject.createWFAttachmentsCount = 0;
			createNewObject.createWFApprovers1 = [];
			createNewObject.createWFApprovers2 = [];
			createNewObject.createWFApprovers3 = []; 
			this.getOwnerComponent().getModel().setProperty("/createNewObject",createNewObject);

			oPath = {
				path: "/createNewObject"
			};
			this.getView().bindObject(oPath);

			

		},
		_onAttachmentButtonPress: function(oEvent) {

			var sDialogName = "AddAttachmentDialog";
			this.mDialogs = this.mDialogs || {};
			var oDialog = this.mDialogs[sDialogName];
			if (!oDialog) {
				oDialog = new AddAttachmentDialog(this.getView());
				this.mDialogs[sDialogName] = oDialog;

				// For navigation.
				oDialog.setRouter(this.oRouter);
			}

			var context = oEvent.getSource().getBindingContext();
			oDialog._oControl.setBindingContext(context);

			oDialog.open();

		},

		onDeleteAttachment: function(oEvent) {
			var oModel = this.getOwnerComponent().getModel();
			var attList=oModel.getProperty("/createNewObject/createWFAttachments");
			var current=oEvent.getSource().getBindingContext().getProperty("");
			for (var i=0;i<attList.length;i++){
				if (attList[i].fileName == current.fileName){
					attList.splice(i,1);
				}
			}
			oModel.setProperty("/createNewObject/createWFAttachments",attList);
			var oAttListTable = this.getView().byId("createWFAttachmentsTable");
			oAttListTable.getBinding("items").refresh();
		},

		_onNewApprover1ButtonPress: function(oEvent) {

			var sDialogName = "AddApproverDialog";
			this.mDialogs = this.mDialogs || {};
			var oDialog = this.mDialogs[sDialogName];
			if (!oDialog) {
				oDialog = new AddApproverDialog(this.getView());
				this.mDialogs[sDialogName] = oDialog;

				// For navigation.
				oDialog.setRouter(this.oRouter);
			}

			var context = oEvent.getSource().getBindingContext();
			oDialog._oControl.setBindingContext(context);
			oDialog.getControl().data("apprLevel",1);

			oDialog.open();

		},

		_onNewApprover2ButtonPress: function(oEvent) {

			var sDialogName = "AddApproverDialog";
			this.mDialogs = this.mDialogs || {};
			var oDialog = this.mDialogs[sDialogName];
			if (!oDialog) {
				oDialog = new AddApproverDialog(this.getView());
				this.mDialogs[sDialogName] = oDialog;

				// For navigation.
				oDialog.setRouter(this.oRouter);
			}

			var context = oEvent.getSource().getBindingContext();
			oDialog._oControl.setBindingContext(context);
			oDialog.getControl().data("apprLevel",2);

			oDialog.open();

		},

		_onNewApprover3ButtonPress: function(oEvent) {

			var sDialogName = "AddApproverDialog";
			this.mDialogs = this.mDialogs || {};
			var oDialog = this.mDialogs[sDialogName];
			if (!oDialog) {
				oDialog = new AddApproverDialog(this.getView());
				this.mDialogs[sDialogName] = oDialog;

				// For navigation.
				oDialog.setRouter(this.oRouter);
			}

			var context = oEvent.getSource().getBindingContext();
			oDialog._oControl.setBindingContext(context);
			oDialog.getControl().data("apprLevel",3);

			oDialog.open();

		},

		onDeleteApprover1: function(oEvent) {
			var oModel = this.getOwnerComponent().getModel();
			var apprList=oModel.getProperty("/createNewObject/createWFApprovers1");
			var current=oEvent.getSource().getBindingContext().getProperty("");
			for (var i=0;i<apprList.length;i++){
				if (apprList[i].approverName == current.approverName){
					apprList.splice(i,1);
				}
			}
			oModel.setProperty("/createNewObject/createWFApprovers1",apprList);
			var oApprListTable = this.getView().byId("createWFApprovers1Table");
			oApprListTable.getBinding("items").refresh();
		},

		onDeleteApprover2: function(oEvent) {
			var oModel = this.getOwnerComponent().getModel();
			var apprList=oModel.getProperty("/createNewObject/createWFApprovers2");
			var current=oEvent.getSource().getBindingContext().getProperty("");
			for (var i=0;i<apprList.length;i++){
				if (apprList[i].approverName == current.approverName){
					apprList.splice(i,1);
				}
			}
			oModel.setProperty("/createNewObject/createWFApprovers2",apprList);
			var oApprListTable = this.getView().byId("createWFApprovers2Table");
			oApprListTable.getBinding("items").refresh();
		},

		onDeleteApprover3: function(oEvent) {
			var oModel = this.getOwnerComponent().getModel();
			var apprList=oModel.getProperty("/createNewObject/createWFApprovers3");
			var current=oEvent.getSource().getBindingContext().getProperty("");
			for (var i=0;i<apprList.length;i++){
				if (apprList[i].approverName == current.approverName){
					apprList.splice(i,1);
				}
			}
			oModel.setProperty("/createNewObject/createWFApprovers3",apprList);
			var oApprListTable = this.getView().byId("createWFApprovers3Table");
			oApprListTable.getBinding("items").refresh();
		},

		onCreateWorkflowPress: async function(oEvent){
			var oModel = this.getOwnerComponent().getModel();
			var oDataModel = this.getOwnerComponent().getModel("hanaodata");
			var files = oModel.getProperty("/createNewObject/createWFAttachments");
			var approvers1 = oModel.getProperty("/createNewObject/createWFApprovers1");
			var approvers2 = oModel.getProperty("/createNewObject/createWFApprovers2");
			var approvers3 = oModel.getProperty("/createNewObject/createWFApprovers3");
			var wfSubject = oModel.getProperty("/createNewObject/WFSubject");
			var wfAdditionalInfo = oModel.getProperty("/createNewObject/WFAdditionalInfo");
			var wfFullDescrtiption = oModel.getProperty("/createNewObject/WFFullDescription");
			var userInfo = this.getOwnerComponent().getModel("userInfo").getData();

			var body = {
				context: {
					requesterEmail: userInfo.email,
					subject: wfSubject,
					additionalInfo: wfAdditionalInfo,
					fullDescription: wfFullDescrtiption,
					level1 : {},
					level2 : {},
					level3 : {}
				},
				definitionId: "kupit.flexiblewf.main",
			};

			var newWFHana = {
				requesterEmail: userInfo.email,
				subject: wfSubject,
				additionalInfo: wfAdditionalInfo,
				fullDescription: wfFullDescrtiption,
				status: "PENDING",
				ToApprovers: [

				]
			}

			for(var a=0;a<approvers1.length;a++){
				var contextAppr = new Object();
				contextAppr.subject = wfSubject;
				contextAppr.user = approvers1[a].approverName;
				contextAppr.email = approvers1[a].email;
				body.context.level1["approver_"+(a+1)] = contextAppr;

				var hanaAppr = new Object();
				hanaAppr.level = 1;
				hanaAppr.numb = (a+1);
				hanaAppr.username = approvers1[a].approverName;
				hanaAppr.name = approvers1[a].givenName;
				hanaAppr.surname = approvers1[a].familyName;
				hanaAppr.email = approvers1[a].email;
				hanaAppr.ID_Posizione = approvers1[a].ID_Posizione;
				hanaAppr.Descrizione_Posizione = approvers1[a].Descrizione_Posizione;
				newWFHana.ToApprovers.push(hanaAppr);

			}

			for(var a=0;a<approvers2.length;a++){
				var contextAppr = new Object();
				contextAppr.subject = wfSubject;
				contextAppr.user = approvers2[a].approverName;
				contextAppr.email = approvers2[a].email;
				body.context.level2["approver_"+(a+1)] = contextAppr;

				var hanaAppr = new Object();
				hanaAppr.level = 2;
				hanaAppr.numb = (a+1);
				hanaAppr.username = approvers2[a].approverName;
				hanaAppr.name = approvers2[a].givenName;
				hanaAppr.surname = approvers2[a].familyName;
				hanaAppr.email = approvers2[a].email;
				hanaAppr.ID_Posizione = approvers2[a].ID_Posizione;
				hanaAppr.Descrizione_Posizione = approvers2[a].Descrizione_Posizione;
				newWFHana.ToApprovers.push(hanaAppr);
			}

			for(var a=0;a<approvers3.length;a++){
				var contextAppr = new Object();
				contextAppr.subject = wfSubject;
				contextAppr.user = approvers3[a].approverName;
				contextAppr.email = approvers3[a].email;
				body.context.level3["approver_"+(a+1)] = contextAppr;

				var hanaAppr = new Object();
				hanaAppr.level = 3;
				hanaAppr.numb = (a+1);
				hanaAppr.username = approvers3[a].approverName;
				hanaAppr.name = approvers3[a].givenName;
				hanaAppr.surname = approvers3[a].familyName;
				hanaAppr.email = approvers3[a].email;
				hanaAppr.ID_Posizione = approvers3[a].ID_Posizione;
				hanaAppr.Descrizione_Posizione = approvers3[a].Descrizione_Posizione;
				newWFHana.ToApprovers.push(hanaAppr);
			}

			this.getView().setBusy(true);

			
			var oDataRes = await this.createWorkflowOdata(oDataModel,newWFHana);

			var baseUrlWFR = this.getOwnerComponent().getTrueDestPath("bpmworkflowruntimerest");

			var url =
			baseUrlWFR +"workflow-instances";

			//TODO: prendere URL da destination per app deployata
			/*jQuery.ajax({
				method: "POST",
				url: url,
				cache: false,
				contentType: "application/json",
				async: false,
				headers: {
					"X-CSRF-Token": "fetch"
				},
				data: JSON.stringify(body),
				success: jQuery.proxy(function (data) {

				}, this),
				error: jQuery.proxy(function (error) {

				}, this),
			});*/
			if (oDataRes.status == "KO"){
				return;
			}

			body.context.hana_id = oDataRes.answer.WorkflowID;

			var workflowCreateRes = await this.createWorkflow(url,body);

			if (workflowCreateRes.status == "OK"){

				var oDataUpdRes = await this.updateWorkflowOdata(oDataModel,workflowCreateRes.answer.id,oDataRes.answer.WorkflowID);

				var baseUrlDS = this.getOwnerComponent().getTrueDestPath("docservice");
				var urldoc = baseUrlDS + "browser";
				var session = cmis.createSession(urldoc);

				var loadRep =  await  this.loadRepositories(session);
				if (loadRep.status == "OK"){
					var repInfo =  await  this.getRepositoryInfo(session);
					if (repInfo.status == "OK"){
						var objProva = await this.getPath(session, session.defaultRepository.rootFolderId, "/ALLEGATIWF", "ALLEGATIWF");
						if (objProva.status == "OK"){
							var objWfFolder = await this.getPath(session, objProva.answer.properties["cmis:objectId"].value, "/ALLEGATIWF/"+oDataRes.answer.WorkflowID, oDataRes.answer.WorkflowID);
							if (objWfFolder.status == "OK"){
								var objIssuer = objWfFolder;
								//var objIssuer = await this.getPath(session, objWfFolder.answer.properties["cmis:objectId"].value, "/ALLEGATIWF/"+oDataRes.answer.WorkflowID+"/ISSUER", "ISSUER");
								//if (objIssuer.status == "OK"){
									for (var i=0;i<files.length;i++){
										var docObj = await this.createDocument(session, objIssuer.answer.properties["cmis:objectId"].value, files[i]);
										if (docObj.status == "OK"){
											var newAttFile = new Object();
											newAttFile.WorkflowID = oDataRes.answer.WorkflowID;
											newAttFile.filename = files[i].fileName;
											newAttFile.description = files[i].fileDescription;
											newAttFile.documentID = docObj.answer.properties["cmis:objectId"].value;
											newAttFile.size = files[i].fileSize;

											oDataModel.create("/Attachment",newAttFile,{
												success: function (oData){
													var f=1;
												}.bind(this)
											})
										}
									}
									
									this.getOwnerComponent().getModel().setProperty("/createFlag",undefined);
									this.oRouter.navTo("WfListMaster");
								//}
							}
						}
					}
				}
			}

			this.getView().setBusy(false);
		},

		onSaveWorkflowPress: async function(oEvent){
			var oModel = this.getOwnerComponent().getModel();
			var oDataModel = this.getOwnerComponent().getModel("hanaodata");
			var files = oModel.getProperty("/createNewObject/createWFAttachments");
			var approvers1 = oModel.getProperty("/createNewObject/createWFApprovers1");
			var approvers2 = oModel.getProperty("/createNewObject/createWFApprovers2");
			var approvers3 = oModel.getProperty("/createNewObject/createWFApprovers3");
			var wfSubject = oModel.getProperty("/createNewObject/WFSubject");
			var wfAdditionalInfo = oModel.getProperty("/createNewObject/WFAdditionalInfo");
			var wfFullDescrtiption = oModel.getProperty("/createNewObject/WFFullDescription");
			var userInfo = this.getOwnerComponent().getModel("userInfo").getData();

			var body = {
				context: {
					requesterEmail: userInfo.email,
					subject: wfSubject,
					additionalInfo: wfAdditionalInfo,
					fullDescription: wfFullDescrtiption,
					level1 : {},
					level2 : {},
					level3 : {}
				},
				definitionId: "kupit.flexiblewf.main",
			};

			var newWFHana = {
				requesterEmail: userInfo.email,
				subject: wfSubject,
				additionalInfo: wfAdditionalInfo,
				fullDescription: wfFullDescrtiption,
				status: "DRAFT",
				ToApprovers: [

				]
			}

			for(var a=0;a<approvers1.length;a++){

				var hanaAppr = new Object();
				hanaAppr.level = 1;
				hanaAppr.numb = (a+1);
				hanaAppr.username = approvers1[a].approverName;
				hanaAppr.name = approvers1[a].givenName;
				hanaAppr.surname = approvers1[a].familyName;
				hanaAppr.email = approvers1[a].email;
				hanaAppr.ID_Posizione = approvers1[a].ID_Posizione;
				hanaAppr.Descrizione_Posizione = approvers1[a].Descrizione_Posizione;
				newWFHana.ToApprovers.push(hanaAppr);

			}

			for(var a=0;a<approvers2.length;a++){

				var hanaAppr = new Object();
				hanaAppr.level = 2;
				hanaAppr.numb = (a+1);
				hanaAppr.username = approvers2[a].approverName;
				hanaAppr.name = approvers2[a].givenName;
				hanaAppr.surname = approvers2[a].familyName;
				hanaAppr.email = approvers2[a].email;
				hanaAppr.ID_Posizione = approvers2[a].ID_Posizione;
				hanaAppr.Descrizione_Posizione = approvers2[a].Descrizione_Posizione;
				newWFHana.ToApprovers.push(hanaAppr);
			}

			for(var a=0;a<approvers3.length;a++){

				var hanaAppr = new Object();
				hanaAppr.level = 3;
				hanaAppr.numb = (a+1);
				hanaAppr.username = approvers3[a].approverName;
				hanaAppr.name = approvers3[a].givenName;
				hanaAppr.surname = approvers3[a].familyName;
				hanaAppr.email = approvers3[a].email;
				hanaAppr.ID_Posizione = approvers3[a].ID_Posizione;
				hanaAppr.Descrizione_Posizione = approvers3[a].Descrizione_Posizione;
				newWFHana.ToApprovers.push(hanaAppr);
			}

			this.getView().setBusy(true);

			
			var oDataRes = await this.createWorkflowOdata(oDataModel,newWFHana);

			var baseUrlWFR = this.getOwnerComponent().getTrueDestPath("bpmworkflowruntimerest");

			var url =
			baseUrlWFR +"workflow-instances";

			//TODO: prendere URL da destination per app deployata
			/*jQuery.ajax({
				method: "POST",
				url: url,
				cache: false,
				contentType: "application/json",
				async: false,
				headers: {
					"X-CSRF-Token": "fetch"
				},
				data: JSON.stringify(body),
				success: jQuery.proxy(function (data) {

				}, this),
				error: jQuery.proxy(function (error) {

				}, this),
			});*/
			if (oDataRes.status == "KO"){
				return;
			}

			body.context.hana_id = oDataRes.answer.WorkflowID;

			//var workflowCreateRes = await this.createWorkflow(url,body);

			//if (workflowCreateRes.status == "OK"){

				//var oDataUpdRes = await this.updateWorkflowOdata(oDataModel,workflowCreateRes.answer.id,oDataRes.answer.WorkflowID);

				var baseUrlDS = this.getOwnerComponent().getTrueDestPath("docservice");
				var urldoc = baseUrlDS + "browser";
				var session = cmis.createSession(urldoc);

				var loadRep =  await  this.loadRepositories(session);
				if (loadRep.status == "OK"){
					var repInfo =  await  this.getRepositoryInfo(session);
					if (repInfo.status == "OK"){
						var objProva = await this.getPath(session, session.defaultRepository.rootFolderId, "/ALLEGATIWF", "ALLEGATIWF");
						if (objProva.status == "OK"){
							var objWfFolder = await this.getPath(session, objProva.answer.properties["cmis:objectId"].value, "/ALLEGATIWF/"+oDataRes.answer.WorkflowID, oDataRes.answer.WorkflowID);
							if (objWfFolder.status == "OK"){
								var objIssuer = objWfFolder;
								//var objIssuer = await this.getPath(session, objWfFolder.answer.properties["cmis:objectId"].value, "/ALLEGATIWF/"+oDataRes.answer.WorkflowID+"/ISSUER", "ISSUER");
								//if (objIssuer.status == "OK"){
									for (var i=0;i<files.length;i++){
										var docObj = await this.createDocument(session, objIssuer.answer.properties["cmis:objectId"].value, files[i]);
										if (docObj.status == "OK"){
											var newAttFile = new Object();
											newAttFile.WorkflowID = oDataRes.answer.WorkflowID;
											newAttFile.filename = files[i].fileName;
											newAttFile.description = files[i].fileDescription;
											newAttFile.documentID = docObj.answer.properties["cmis:objectId"].value;
											newAttFile.size = files[i].fileSize;

											oDataModel.create("/Attachment",newAttFile,{
												success: function (oData){
													var f=1;
												}.bind(this)
											})
										}
									}
									
									this.getOwnerComponent().getModel().setProperty("/createFlag",undefined);
									this.oRouter.navTo("WfListMaster");
								//}
							}
						}
					}
				}
			//}

			this.getView().setBusy(false);
		},

		createWorkflowOdata: function(oDataModel,newWF){
			return new Promise(async function (resolve, reject) {	
				oDataModel.create('/Workflow', newWF, {
					success: jQuery.proxy(function(oData) {
						resolve({ status : "OK", answer: oData});
					},this),
					error: jQuery.proxy(function(oError) {
						resolve({ status : "KO", answer: oError});
					},this)
				});
			}.bind(this));

		},

		updateWorkflowOdata: function(oDataModel,workflow_id, hana_id){
			return new Promise(async function (resolve, reject) {	
				var newWF= {
					workflow_id : workflow_id
				}
				oDataModel.update("/Workflow("+hana_id+")", newWF, {
					success: jQuery.proxy(function(oData) {
						resolve({ status : "OK", answer: oData});
					},this),
					error: jQuery.proxy(function(oError) {
						resolve({ status : "KO", answer: oError});
					},this)
				});
			}.bind(this));

		},

		createWorkflow: function(url,body){
			return new Promise(async function (resolve, reject) {	
				jQuery.ajax({
					method: "POST",
					url: url,
					cache: false,
					contentType: "application/json",
					async: true,
					headers: {
						"X-CSRF-Token": "fetch"
					},
					data: JSON.stringify(body),
					success: jQuery.proxy(function (data) {
						resolve({ status : "OK", answer: data});
					}, this),
					error: jQuery.proxy(function (error) {
						resolve({ status : "KO", answer: error});
					}, this),
				});
			}.bind(this));
		},
		loadRepositories: function(session){
			return new Promise(async function (resolve, reject) {
				if (this.getOwnerComponent().repositoryId == null || this.getOwnerComponent().repositoryId == "") {
					var oAnswer = await Utilities.getDMSRepositoryId(this.getOwnerComponent());
					this.getOwnerComponent().repositoryId = oAnswer.answer;
				}
				var baseUrlDS = this.getOwnerComponent().getTrueDestPath("docservice");
				var dmsRepId = this.getOwnerComponent().repositoryId;
				session.loadRepositories({
					request: {
						success: function (data) {
							for (var i in session.repositories) {
								var repo = session.repositories[i];
								repo.repositoryUrl = baseUrlDS + "browser/" + repo.repositoryId;
								repo.rootFolderUrl = baseUrlDS + "browser/" + repo.repositoryId + "/root";

								// if (repo.repositoryName == "Doc_Repository_Kupit_dev"){
								// 	session.defaultRepository = repo;
								// 	break;
								// }
								if (repo.repositoryId == dmsRepId){
									session.defaultRepository = repo;
									break;
								}

							}
							resolve({ status : "OK", answer: data});
						},
						error: function (e) {
							resolve({ status : "KO", answer: e});
						}						
					}
				});
			}.bind(this));
		},

		getRepositoryInfo: function(session) {
			return new Promise(async function (resolve, reject) {
				session.getRepositoryInfo({
					request: {
						success: function (info) {
							resolve({ status : "OK", answer: info});
						}.bind(this),
						error: function (e) {
							resolve({ status : "KO", answer: e});
						}
					}
				});
			}.bind(this));
		},

		getChildren: function(session,currentId) {
			return new Promise(async function (resolve, reject) {
				session.getChildren(currentId,{
					request: {
						success: function (info) {
							resolve({ status : "OK", answer: info});
						}.bind(this),
						error: function (e) {
							resolve({ status : "KO", answer: e});
						}
					}
				});
			}.bind(this));
		},

		getPath: function (session, currentId, path, innerFolder) {
			return new Promise(function (resolve, reject) {
				session.getObjectByPath(path, {
					includeRelationships: 'both',
					request: {
						success: function (data) {
							resolve({ status : "OK", answer: data});
						},
						error: function (e) {
							session.createFolder(currentId, innerFolder + "", null, null, null, {
								request: {
									success: function (data2) {
										resolve({ status : "OK", answer: data2});
									}.bind(this),
									error: function (e2) {
										resolve({ status : "KO", answer: e2});
									}
								}
							});
						}
					}
				});
			}.bind(this));
		},
		createFolder: function (session, id, path) {
			return new Promise(function (resolve, reject) {
				session.createFolder(id, path + "", null, null, null, {
					request: {
						success: function (data) {
							resolve({ status : "OK", answer: data});
						},
						error: function (e) {
							resolve({ status : "KO", answer: e});
						}
					}
				});
			}.bind(this));
		},

		createDocument: function (session, id, file) {
			return new Promise(function (resolve, reject) {
				session.createDocument(id, new Blob([file.fileContent]), file.fileName, file.fileType, "major", null, null, null, {
					request: {
						success: jQuery.proxy(function (data) {
							resolve({ status : "OK", answer: data});
						}, this),
						error: jQuery.proxy(function (e) {
							resolve({ status : "KO", answer: e});
						}, this)
					},
					filename: file.fileName
				});
			}.bind(this));
		},

		onCancelWorkflowPress: function(oEvent) {

			//var oBindingContext = oEvent.getParameter("listItem").getBindingContext();
			//var oEventCopy = jQuery.extend(true, {}, oEvent);
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
								//this._clickListItem(oEventCopy);
								this.oRouter.navTo("WfListMaster");
							}
						},this)
					}
				);
				return;
			} else {
				this.oRouter.navTo("WfListMaster", {}, true);
				//this._clickListItem(oEventCopy);
			}

		},

		onInit: function() {
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.getView().setBusyIndicatorDelay(10);
			this.oRouter.getTarget("CreateWfDetail").attachDisplay(jQuery.proxy(this.handleRouteMatched, this));
			var oView = this.getView();
			oView.addEventDelegate({
				onBeforeShow: function() {
					if (sap.ui.Device.system.phone) {
						var oPage = oView.getContent()[0];
						if (oPage.getShowNavButton && !oPage.getShowNavButton()) {
							oPage.setShowNavButton(true);
							oPage.attachNavButtonPress(function() {
								this.oRouter.navTo("WfListMaster", {}, true);
							}.bind(this));
						}
					}
				}.bind(this)
			});

		}
	});
}, /* bExport= */ true);
