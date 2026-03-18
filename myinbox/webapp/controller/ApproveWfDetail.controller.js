sap.ui.define(["sap/ui/core/mvc/Controller",
	"sap/ui/core/Core",
	"sap/m/MessageBox",
	"./AddApproverRealDialog",
	"./AddAttachmentRealDialog",
	"./utilities",
	"sap/ui/core/routing/History"
], function(BaseController, Core, MessageBox, AddApproverRealDialog, AddAttachmentRealDialog, Utilities, History) {
	"use strict";

	return BaseController.extend("kupit.flexiblewf.myinbox.controller.ApproveWfDetail", {
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

			var routeName ;
			if (oEvent.mParameters.data !=undefined && oEvent.mParameters.data.routeConfig !=undefined && oEvent.mParameters.data.routeConfig.name !=undefined ){
				routeName = oEvent.mParameters.data.routeConfig.name;
			}

			if (!this.sContext) {
				//this.getView().byId("approverActionToolbar").setEnabled(false);
				this.getView().unbindObject("hanaodata");
				this.getOwnerComponent().getModel().setProperty("/approveWFAttachments",[]);
				this.getOwnerComponent().getModel().setProperty("/approveWFAttachmentsCount",0);
			}

	


			var oPath;
			var oApprover1Path;
			var oApprover2Path;
			var oApprover3Path;
			var oCommentPath;
			var baseUrlDS = this.getOwnerComponent().getTrueDestPath("docservice");

			/*this.getOwnerComponent().getModel("docservice").loadData(baseUrlDS+"browser/056d82e6-935f-4175-9b72-74a26064155f/root?objectId=DhAttxu15g58ivVgJxYTvF5yhefFF2AbO-BBVUDTbJE").then(function(res){
				var c=1;
			}.bind(this)

			);*/
			this.getOwnerComponent().getModel().setProperty("/taskPending",false);
			this.getOwnerComponent().getModel().setProperty("/workflowDraft",false);

			if (this.sContext) {

				var contexts=this.sContext.split ("-");
				this.hana_id = contexts[0];
				this.hana_level = contexts[1];
				this.hana_number = contexts[2];

				//this.getWorkflowContext(this.sContext).then(function(res){
					var b=1;
					/*oPath = {
						path: "bpmworkflowruntimeodata>/TaskCollection(SAP__Origin='NA',InstanceID='" + this.sContext + "')",
						parameters: oParams
					};*/

				//	this.getOwnerComponent().getModel().setProperty("/taskContext",res.answer);

					oPath = {
						path: "hanaodata>/Workflow(" + this.hana_id + ")",
						parameters: {
							expand : "ToApprovers,ToComments,ToAttachments"
						},
						events: {
							dataReceived: function (oEvent){
								var dataHana= oEvent.getParameter("data");
								if (dataHana.status=="DRAFT"){
									this.getOwnerComponent().getModel().setProperty("/workflowDraft",true);
								}
								if (this.hana_level!="undefined"){
									this.getTask(this.hana_id,this.hana_level,this.hana_number).then(function(res2){
										if (res2.status == "OK"){
											var taskCollectionData= res2.answer;
											var task = taskCollectionData.d.results[0];
											this.getOwnerComponent().getModel().setProperty("/taskInfo",task);
											if (task != undefined && task != null && task.InstanceID != undefined && task.InstanceID != null){
												this.getWorkflowContext(task.InstanceID).then(function(res){
													
													if (res2.status == "OK"){
														this.getOwnerComponent().getModel().setProperty("/taskPending",true);
														this.getOwnerComponent().getModel().setProperty("/taskContext",res.answer);
														//this.getView().byId("approverActionToolbar").setEnabled(true);
														this.getAttachmentList(dataHana.ToAttachments.length);
													} else {

													}
													this.getView().setBusy(false);
												}.bind(this));
											} else {
												this.getAttachmentList();
												this.getView().setBusy(false);
											}
										} else {
											this.getAttachmentList();
											this.getView().setBusy(false);
										}
									}.bind(this));
								} else {
									
									this.getAttachmentList();
									//this.getView().byId("approverActionToolbar").setEnabled(false);
									this.getOwnerComponent().getModel().setProperty("/taskContext",undefined);
									this.getView().setBusy(false);
								}
							}.bind(this)
						}
					};
					this.getView().setBusy(true);
					this.getView().bindObject(oPath);

					

					

					/*
					oApprover1Path = {
						path: "hanaodata>/Workflow(" + res.answer.hana_id + ")/ToApprovers",
						filters: [
							new sap.ui.model.Filter({ path: "level", operator: sap.ui.model.FilterOperator.EQ, value1: 1 })
						]


					};
					oApprover2Path = {
						path: "hanaodata>/Workflow(" + res.answer.hana_id + ")/ToApprovers",
						filters: [
							new sap.ui.model.Filter({ path: "level", operator: sap.ui.model.FilterOperator.EQ, value1: 2 })
						]

					};
					oApprover3Path = {
						path: "hanaodata>/Workflow(" + res.answer.hana_id + ")/ToApprovers",
						filters: [
							new sap.ui.model.Filter({ path: "level", operator: sap.ui.model.FilterOperator.EQ, value1: 3 })
						]

					};
					oCommentPath = {
						path: "hanaodata>/Workflow(" + res.answer.hana_id + ")/ToComments"
					};
					
					
					var template1 = this.getView().byId("approveWFApprovers1Table").getBindingInfo("items").template;
					this.getView().byId("approveWFApprovers1Table").unbindAggregation("items");
					oApprover1Path.template = template1;
					this.getView().byId("approveWFApprovers1Table").bindItems(oApprover1Path);
					var template2 = this.getView().byId("approveWFApprovers2Table").getBindingInfo("items").template;
					this.getView().byId("approveWFApprovers2Table").unbindAggregation("items");
					oApprover2Path.template = template2;
					this.getView().byId("approveWFApprovers2Table").bindItems(oApprover2Path);
					var template3 = this.getView().byId("approveWFApprovers3Table").getBindingInfo("items").template;
					this.getView().byId("approveWFApprovers3Table").unbindAggregation("items");
					oApprover3Path.template = template3;
					this.getView().byId("approveWFApprovers3Table").bindItems(oApprover3Path);
					*/
					/*
					
					this.getView().byId("approveWFApprovers2Table").bindItems(oApprover2Path);
					this.getView().byId("approveWFApprovers3Table").bindItems(oApprover3Path);*/
				//}.bind(this));

			}

			

		},

		onSendWorkflow: async function(oEvent){

			var oDataModel = this.getOwnerComponent().getModel("hanaodata");
			var hanaOdata = this.getView().getBindingContext("hanaodata").getProperty("");
			var approversPaths = this.getView().getBindingContext("hanaodata").getProperty("ToApprovers");
			var userInfo = this.getOwnerComponent().getModel("userInfo").getData();

			


			var wfSubject = hanaOdata.subject;
			var wfAdditionalInfo = hanaOdata.additionalInfo;
			var wfFullDescrtiption = hanaOdata.fullDescription;


			var body = {
				context: {
					requesterEmail: userInfo.email,
					hana_id: hanaOdata.WorkflowID,
					subject: wfSubject,
					additionalInfo: wfAdditionalInfo,
					fullDescription: wfFullDescrtiption,
					level1 : {},
					level2 : {},
					level3 : {}
				},
				definitionId: "kupit.flexiblewf.main",
			};

			var saveWFHana = {
				status: "PENDING"
			}

			var count = 0;
			for(var a=0;a<approversPaths.length;a++){
				var appr = oDataModel.getProperty("/"+approversPaths[a]);
				if (appr.level != 1){
					continue;
				}
				count = count + 1;
				var contextAppr = new Object();
				contextAppr.subject = wfSubject;
				contextAppr.user = appr.username;
				contextAppr.email = appr.email;
				body.context.level1["approver_"+appr.numb] = contextAppr;

			}

			var count = 0;
			for(var a=0;a<approversPaths.length;a++){
				var appr = oDataModel.getProperty("/"+approversPaths[a]);
				if (appr.level != 2){
					continue;
				}
				count = count + 1;
				var contextAppr = new Object();
				contextAppr.subject = wfSubject;
				contextAppr.user = appr.username;
				contextAppr.email = appr.email;
				body.context.level2["approver_"+appr.numb] = contextAppr;

			}

			var count = 0;
			for(var a=0;a<approversPaths.length;a++){
				var appr = oDataModel.getProperty("/"+approversPaths[a]);
				if (appr.level != 3){
					continue;
				}
				count = count + 1;
				var contextAppr = new Object();
				contextAppr.subject = wfSubject;
				contextAppr.user = appr.username;
				contextAppr.email = appr.email;
				body.context.level3["approver_"+appr.numb] = contextAppr;

			}

			var baseUrlWFR = this.getOwnerComponent().getTrueDestPath("bpmworkflowruntimerest");

			var url =
			baseUrlWFR +"workflow-instances";

			var workflowCreateRes = await this.createWorkflow(url,body);

			saveWFHana.workflow_id = workflowCreateRes.answer.id;

			if (workflowCreateRes.status == "OK"){

				var oDataUpdRes = await this.updateWorkflowOdata(oDataModel,saveWFHana,hanaOdata.WorkflowID);

				this.oRouter.navTo("WfListMaster");
			}

		},

		updateWorkflowOdata: function(oDataModel, saveWFHana, hana_id){
			return new Promise(async function (resolve, reject) {	
				var newWF= saveWFHana;
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

		getWorkflowContext: function(task_id){
			return new Promise(async function (resolve, reject) {	
				var baseUrlWFR = this.getOwnerComponent().getTrueDestPath("bpmworkflowruntimerest");
				var url = baseUrlWFR+"task-instances/"+task_id+"/context"
				//var token=this._fetchTokenWFR();
				jQuery.ajax({
					method: "GET",
					url: url,
					cache: false,
					contentType: "application/json",
					async: true,
					headers: {
						"X-CSRF-Token": "Fetch"
					},
					//data: JSON.stringify(body),
					success: jQuery.proxy(function (data) {
						resolve({ status : "OK", answer: data});
					}, this),
					error: jQuery.proxy(function (error) {
						resolve({ status : "KO", answer: error});
					}, this),
				});
			}.bind(this));
		},

		_fetchTokenWFR: function() {
			var token;
			var baseUrlWFR = this.getOwnerComponent().getTrueDestPath("bpmworkflowruntimerest");
			$.ajax({
				url: baseUrlWFR+"xsrf-token",
				method: "GET",
				async: false,
				headers: {
					"X-CSRF-Token": "Fetch"
				},
				success: function(result, xhr, data) {
					token = data.getResponseHeader("X-CSRF-Token");
				}
			});
			return token;
		},

		getTask: function(hana_id,level,number){
			return new Promise(async function (resolve, reject) {	
				var baseUrlWFO = this.getOwnerComponent().getTrueDestPath("bpmworkflowruntimeodata");
				var url = baseUrlWFO+"TaskCollection?$format=json&$expand=CustomAttributeData&$filter=( CustomAttributeData/Name eq 'level' and CustomAttributeData/Value eq '"+level+"')"+
				                                                                			   " and ( CustomAttributeData/Name eq 'number' and CustomAttributeData/Value eq '"+number+"')"+
																							   " and ( CustomAttributeData/Name eq 'hana_id' and CustomAttributeData/Value eq '"+hana_id+"')";
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
						resolve({ status : "OK", answer: data});
					}, this),
					error: jQuery.proxy(function (error) {
						resolve({ status : "KO", answer: error});
					}, this),
				});
			}.bind(this));
		},

		getAttachmentList: function(fileCount){
			//this.getOwnerComponent().getModel().setProperty("/approveWFAttachmentsCount",fileCount);
			var oTable = this.getView().byId("approveWFAttachmentsTable");
			oTable.setBusy(true);
			oTable.attachEventOnce("updateFinished", function(oEvent) {
				oTable.setBusy(false);
				this.getOwnerComponent().getModel().setProperty("/approveWFAttachmentsCount",oEvent.getParameter("total"));
			}.bind(this));

			oTable.getBinding("items").refresh();

			


			
		},

		getAttachmentListOData: function(){
			return new Promise(async function (resolve, reject) {	
				var workflowHana = this.getView().getBindingContext("hanaodata").getProperty("");
				var baseUrlDS = this.getOwnerComponent().getTrueDestPath("docservice");
				var urldoc = baseUrlDS+"browser";
				var session = cmis.createSession(urldoc);

				var loadRep =  await  this.loadRepositories(session);
				if (loadRep.status == "OK"){
					var repInfo =  await  this.getRepositoryInfo(session);
					if (repInfo.status == "OK"){
						var objProva = await this.getPath(session, session.defaultRepository.rootFolderId, "/ALLEGATIWF", "ALLEGATIWF");
						if (objProva.status == "OK"){
							var objWfFolder = await this.getPath(session, objProva.answer.properties["cmis:objectId"].value, "/ALLEGATIWF/"+workflowHana.WorkflowID, workflowHana.WorkflowID);
							if (objWfFolder.status == "OK"){
								var listFiles = await this.getChildrenFiles(session, objWfFolder.answer.properties["cmis:objectId"].value);
								if (listFiles.status == "OK"){
									for (var j=0; j<listFiles.answer.objects.length;j++){
										listFiles.answer.objects[j].object.properties["cmis:creationDate"].valueOData = new Date(listFiles.answer.objects[j].object.properties["cmis:creationDate"].value);
									}
									this.getOwnerComponent().getModel().setProperty("/approveWFAttachments",listFiles.answer);
									this.getOwnerComponent().getModel().setProperty("/approveWFAttachmentsCount",listFiles.answer.objects.length);
									this.getView().byId("approveWFAttachmentsTable").getBinding("items").refresh();
								}
							}
						}
					}
				}
			}.bind(this));
		},

		onPostComment: async function(oEvent){
			var oModel = this.getOwnerComponent().getModel();
			var oHanaModel = this.getOwnerComponent().getModel("hanaodata");
			var postComment = oModel.getProperty("/approveFeedInputValue");
			var taskContext = oModel.getProperty("/taskContext");
			var taskInbox = oModel.getProperty("/selectedTaskInbox");

			var workflowHana = this.getView().getBindingContext("hanaodata").getProperty("");

			var commentObj = new Object();

			commentObj.WorkflowID = workflowHana.WorkflowID+"";
			commentObj.level = parseInt(this.hana_level+"");
			commentObj.numb = parseInt(this.hana_number+"");
			commentObj.text = postComment;

			this.getView().byId("approveWFCommentsTable").setBusy(true);
			var createApproverCommentRes = await this.createApproverComment(oHanaModel,commentObj);
			this.getView().byId("approveWFCommentsTable").setBusy(false);

			this.getView().byId("approveWFCommentsTable").getBinding("items").refresh();
		},

		createApproverComment: function(oDataModel,commentObj){
			return new Promise(async function (resolve, reject) {	
				oDataModel.create('/Comment', commentObj, {
					success: jQuery.proxy(function(oData) {
						resolve({ status : "OK", answer: oData});
					},this),
					error: jQuery.proxy(function(oError) {
						resolve({ status : "KO", answer: oError});
					},this)
				});
			}.bind(this));

		},

		_onNewApprover1ButtonPress: function(oEvent) {

			var sDialogName = "AddApproverRealDialog";
			this.mDialogs = this.mDialogs || {};
			var oDialog = this.mDialogs[sDialogName];
			if (!oDialog) {
				oDialog = new AddApproverRealDialog(this.getView());
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

			var sDialogName = "AddApproverRealDialog";
			this.mDialogs = this.mDialogs || {};
			var oDialog = this.mDialogs[sDialogName];
			if (!oDialog) {
				oDialog = new AddApproverRealDialog(this.getView());
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

			var sDialogName = "AddApproverRealDialog";
			this.mDialogs = this.mDialogs || {};
			var oDialog = this.mDialogs[sDialogName];
			if (!oDialog) {
				oDialog = new AddApproverRealDialog(this.getView());
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
			var oHanaModel = this.getOwnerComponent().getModel("hanaodata");

			var obj = oEvent.getSource().getBindingContext("hanaodata").getProperty("");

			oHanaModel.remove("/Approver(WorkflowID="+obj.WorkflowID+",level="+obj.level+",numb="+obj.numb+")",{
				success: jQuery.proxy(function(oData) {
					var oApprListTable = this.getView().byId("approveWFApprovers1Table");
					oApprListTable.getBinding("items").refresh();
				},this),
				error: jQuery.proxy(function(oError) {
				},this)
			});

		},

		onDeleteApprover2: function(oEvent) {
			var oHanaModel = this.getOwnerComponent().getModel("hanaodata");

			var obj = oEvent.getSource().getBindingContext("hanaodata").getProperty("");

			oHanaModel.remove("/Approver(WorkflowID="+obj.WorkflowID+",level="+obj.level+",numb="+obj.numb+")",{
				success: jQuery.proxy(function(oData) {
					var oApprListTable = this.getView().byId("approveWFApprovers2Table");
					oApprListTable.getBinding("items").refresh();
				},this),
				error: jQuery.proxy(function(oError) {
				},this)
			});
		},

		onDeleteApprover3: function(oEvent) {
			var oHanaModel = this.getOwnerComponent().getModel("hanaodata");

			var obj = oEvent.getSource().getBindingContext("hanaodata").getProperty("");

			oHanaModel.remove("/Approver(WorkflowID="+obj.WorkflowID+",level="+obj.level+",numb="+obj.numb+")",{
				success: jQuery.proxy(function(oData) {
					var oApprListTable = this.getView().byId("approveWFApprovers3Table");
					oApprListTable.getBinding("items").refresh();
				},this),
				error: jQuery.proxy(function(oError) {
				},this)
			});
		},

		loadRepositories: function(session){
			return new Promise(async function (resolve, reject) {
				var baseUrlDS = this.getOwnerComponent().getTrueDestPath("docservice");
				var dmsRepId = this.getOwnerComponent().repositoryId;
				session.loadRepositories({
					request: {
						success: function (data) {
							for (var i in session.repositories) {
								var repo = session.repositories[i];
								repo.repositoryUrl = baseUrlDS+"browser/" + repo.repositoryId;
								repo.rootFolderUrl = baseUrlDS+"browser/" + repo.repositoryId + "/root";

								// if (repo.repositoryName == "Doc_Repository_Kupit_dev"){
								// 	session.defaultRepository = repo;
								// 	break;
								// }
								if (repo.repositoryId == dmsRepId ){
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

		getChildrenFiles: function(session,currentId) {
			return new Promise(async function (resolve, reject) {
				session.getChildren(currentId,{
					request: {
						success: function (info) {
							var newAttList = new Array();
							for (var j=0; j<info.objects.length;j++){
							
								if(info.objects[j].object.properties["cmis:objectTypeId"].value != "cmis:folder"){
									newAttList.push(info.objects[j]);
								}
							}
							info.objects=newAttList;
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
					}
				});
			}.bind(this));
		},

		onApproveTask: async function(oEvent) {
			var oModel = this.getOwnerComponent().getModel();
			var taskInbox = oModel.getProperty("/taskInfo");
			var body = {status: "COMPLETED", decision: "approve"};
			body.context = new Object();
			body.context['approver_'+this.hana_number] = new Object();
			body.context['approver_'+this.hana_number].approvalStatus = "APPROVED";
			body.context['approver_'+this.hana_number].approvalDate = new Date().toISOString();

			this.getView().setBusy(true);
			var patchTask = await this.patchTask(taskInbox.InstanceID,body);
			//var patchTask = { status : "OK"};



			if (patchTask.status == "OK"){
				var oHanaModel = this.getOwnerComponent().getModel("hanaodata");
				
				var workflowHana = this.getView().getBindingContext("hanaodata").getProperty("");
				
				var updObj= new Object();
				updObj.status = "APPROVED";
				updObj.status_date = new Date();
				oHanaModel.update("/Approver(WorkflowID="+this.hana_id+",level="+this.hana_level+",numb="+this.hana_number+")",updObj,{
					success: jQuery.proxy(function(oData) {
						this.getView().setBusy(false);
						MessageBox.information("Approved!");
						this.oRouter.navTo("WfListMaster");
					},this),
					error: jQuery.proxy(function(oError) {
						this.getView().setBusy(false);
						MessageBox.error("Error in approval!");
					},this)
				});
				
			} else {
				this.getView().setBusy(false);
				MessageBox.error("Error in approval!");
			}
			// /bpmworkflowruntime/rest/v1/task-instances/bb2d4c24-7bd2-11ed-bd85-eeee0a95f3a6

			/*{"status": "COMPLETED", "decision": "approve", "context": {"currentLevel":"1","approver_1":{"user":"mirco.bocedi@techedgegroup.com"},"hana_id":"935d422c-fc9b-40bb-920d-fd148866d3af","approver_8":null,"approver_6":null,"approver_7":null,"approver_4":null,"approver_5":null,"approver_2":null,"approver_3":null}}*/
		
		},

		onRejectTask: function (oEvent) {
			if (!this.oRejectDialog) {
				this.oRejectDialog = new sap.m.Dialog({
					title: "Reject",
					type: sap.m.DialogType.Message,
					content: [
						new sap.m.Label({
							text: "Do you want to reject?",
							labelFor: "rejectionNote"
						}),
						new sap.m.TextArea("rejectionNote", {
							width: "100%",
							placeholder: "Add note (required)"
						})
					],
					beginButton: new sap.m.Button({
						type: sap.m.ButtonType.Emphasized,
						text: "Reject",
						press: async function () {
							var sText = Core.byId("rejectionNote").getValue();
							if (sText !=""){
								await this.onRejectTaskConfirm(oEvent,sText);
								this.oRejectDialog.close();
							} else {
								sap.m.MessageBox.alert("Mandatory comment", {
									title: "Warning",                                 // default
									onClose: null,                                       // default
									styleClass: "",                                      // default
									actions: sap.m.MessageBox.Action.OK,                 // default
									emphasizedAction: sap.m.MessageBox.Action.OK,        // default
									initialFocus: null,                                  // default
									textDirection: sap.ui.core.TextDirection.Inherit     // default
								});
							}
							
							
						}.bind(this)
					}),
					endButton: new sap.m.Button({
						text: "Cancel",
						press: function () {
							this.oRejectDialog.close();
						}.bind(this)
					})
				});
			}

			this.oRejectDialog.open();
		},

		onRejectTaskConfirm: async function(oEvent,comment) {
			var oModel = this.getOwnerComponent().getModel();
			var taskInbox = oModel.getProperty("/taskInfo");
			var body = {status: "COMPLETED", decision: "reject"};
			body.context = new Object();
			body.context['approver_'+this.hana_number] = new Object();
			body.context['approver_'+this.hana_number].approvalStatus = "REJECTED";
			body.context['approver_'+this.hana_number].approvalDate = new Date().toISOString();
			
			this.getView().setBusy(true);
			var patchTask = await this.patchTask(taskInbox.InstanceID,body);
			//var patchTask = { status : "OK"};


			if (patchTask.status == "OK"){
				var oHanaModel = this.getOwnerComponent().getModel("hanaodata");
				var oModel = this.getOwnerComponent().getModel();
				var workflowHana = this.getView().getBindingContext("hanaodata").getProperty("");
				
				var updObj= new Object();
				updObj.status = "REJECTED";
				updObj.status_date = new Date();
				updObj.comment = comment;
				oHanaModel.update("/Approver(WorkflowID="+this.hana_id+",level="+this.hana_level+",numb="+this.hana_number+")",updObj,{
					success: jQuery.proxy(function(oData) {
					},this),
					error: jQuery.proxy(function(oError) {
					},this),
					groupId: "rejectTaskGroup"
				});

				var commentObj = new Object();
				commentObj.WorkflowID = this.hana_id+"";
				commentObj.level = parseInt(this.hana_level+"");
				commentObj.numb = parseInt(this.hana_number+"");
				commentObj.text = comment;
				oHanaModel.create("/Comment",commentObj,{
					success: jQuery.proxy(function(oData) {
					},this),
					error: jQuery.proxy(function(oError) {
					},this),
					groupId: "rejectTaskGroup"
				});

				oHanaModel.submitChanges({
					groupId: "rejectTaskGroup",
					success: jQuery.proxy(function(oData) {
						this.getView().setBusy(false);
						MessageBox.information("Rejected!");
						this.oRouter.navTo("WfListMaster");
					},this),
					error: jQuery.proxy(function(oError) {
						this.getView().setBusy(false);
						MessageBox.error("Error in rejection!");
					},this)
				})
				
			} else {
				this.getView().setBusy(false);
				MessageBox.error("Error in rejection!");
			}

		},

		patchTask: function(taskId,body){
			return new Promise(async function (resolve, reject) {	
				var baseUrlWFR = this.getOwnerComponent().getTrueDestPath("bpmworkflowruntimerest");
				var url = baseUrlWFR+"task-instances/"+taskId
				jQuery.ajax({
					method: "PATCH",
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

		_onAttachmentButtonPress: function(oEvent) {

			var sDialogName = "AddAttachmentRealDialog";
			this.mDialogs = this.mDialogs || {};
			var oDialog = this.mDialogs[sDialogName];
			if (!oDialog) {
				oDialog = new AddAttachmentRealDialog(this.getView());
				this.mDialogs[sDialogName] = oDialog;

				// For navigation.
				oDialog.setRouter(this.oRouter);
			}

			var context = oEvent.getSource().getBindingContext();
			oDialog._oControl.setBindingContext(context);

			oDialog.open();

		},

		onDownloadAttachmentCmis: function(oEvent){
			var oEventClone = jQuery.extend({},oEvent);
			new Promise( async function (resolve, reject) {
				var baseUrlDS = this.getOwnerComponent().getTrueDestPath("docservice");
				var oModel = this.getOwnerComponent().getModel();
				var workflowHana = this.getView().getBindingContext("hanaodata").getProperty("");

				var urldoc = baseUrlDS+"browser";
				var session = cmis.createSession(urldoc);

				var loadRep =  await  Utilities.loadRepositories(this,session);
				if (loadRep.status == "OK"){
					var repInfo =  await  Utilities.getRepositoryInfo(session);
					if (repInfo.status == "OK"){
						var item = oEventClone.getSource().getBindingContext().getObject();
						Utilities.downloadDocument(session,item.object.properties["cmis:objectId"].value);
					}
				}
			}.bind(this));
		},

		onDownloadAttachment: function(oEvent){
			var oEventClone = jQuery.extend({},oEvent);
			new Promise( async function (resolve, reject) {
				var baseUrlDS = this.getOwnerComponent().getTrueDestPath("docservice");
				var oModel = this.getOwnerComponent().getModel();
				var workflowHana = this.getView().getBindingContext("hanaodata").getProperty("");

				var urldoc = baseUrlDS+"browser";
				var session = cmis.createSession(urldoc);

				var loadRep =  await  Utilities.loadRepositories(this,session);
				if (loadRep.status == "OK"){
					var repInfo =  await  Utilities.getRepositoryInfo(session);
					if (repInfo.status == "OK"){
						var item = oEventClone.getSource().getBindingContext("hanaodata").getObject();
						Utilities.downloadDocument(session,item.documentID);
					}
				}
			}.bind(this));
		},

		onDeleteAttachment: function(oEvent){
			var oEventClone = jQuery.extend({},oEvent);
			new Promise( async function (resolve, reject) {
				var baseUrlDS = this.getOwnerComponent().getTrueDestPath("docservice");
				var oModel = this.getOwnerComponent().getModel();
				var workflowHana = this.getView().getBindingContext("hanaodata").getProperty("");

				var urldoc = baseUrlDS+"browser";
				var session = cmis.createSession(urldoc);

				this.getView().setBusy(true);
				var loadRep =  await  Utilities.loadRepositories(this,session);
				if (loadRep.status == "OK"){
					var repInfo =  await  Utilities.getRepositoryInfo(session);
					if (repInfo.status == "OK"){
						var item = oEventClone.getSource().getBindingContext("hanaodata").getObject();
						var deleteRes = await Utilities.deleteDocument(session,item.documentID);
						if (deleteRes.status == "OK"){
							var oDataModel = this.getOwnerComponent().getModel("hanaodata");
							oDataModel.remove("/Attachment(WorkflowID="+item.WorkflowID+",counter="+item.counter+")",{
								success: function (oData){
									this.getView().setBusy(false);
									resolve(deleteRes);
								}.bind(this),
								error: function (oError){
									deleteRes.status = "KO";
									this.getView().setBusy(false);
									resolve(deleteRes);
								}.bind(this),
							})
							
							 
						} else {
							this.getView().setBusy(false);
						}
					} else {
						this.getView().setBusy(false);
					}
				} else {
					this.getView().setBusy(false);
				}
			}.bind(this)).then(function(res){
				this.getView().getController().getAttachmentList();
			}.bind(this));
		},

		onDeleteAttachmentCmis: function(oEvent){
			var oEventClone = jQuery.extend({},oEvent);
			new Promise( async function (resolve, reject) {
				var baseUrlDS = this.getOwnerComponent().getTrueDestPath("docservice");
				var oModel = this.getOwnerComponent().getModel();
				var workflowHana = this.getView().getBindingContext("hanaodata").getProperty("");

				var urldoc = baseUrlDS+"browser";
				var session = cmis.createSession(urldoc);

				var loadRep =  await  Utilities.loadRepositories(this,session);
				if (loadRep.status == "OK"){
					var repInfo =  await  Utilities.getRepositoryInfo(session);
					if (repInfo.status == "OK"){
						var item = oEventClone.getSource().getBindingContext().getObject();
						var deleteRes = await Utilities.deleteDocument(session,item.object.properties["cmis:objectId"].value);
						if (deleteRes.status == "OK"){
							
							resolve(deleteRes);
						}
					}
				}
			}.bind(this)).then(function(res){
				this.getView().getController().getAttachmentList();
			}.bind(this));
		},
		formatApproverStatus: function(data){
			if (data.status == null || data.status ==undefined) {
				if( this.hana_level == data.level){
					return "PENDING";
				}
			} else return data.status;
		},

		downloadPdf: async function(oEvent){
			var workflowHana = this.getView().getBindingContext("hanaodata").getProperty("");
			var appPath= this.getOwnerComponent().getTrueDestPath("hanaodatav4");
			this.getView().setBusy(true);
			var token=  Utilities.fetchTokenOV4_2(this.getOwnerComponent());
			jQuery.ajax({
				method: "GET",
				url: appPath+"generatePdf(hanaId="+this.hana_id+")",
				cache: false,
				contentType: "application/json",
				async: true,
				headers: {
					"X-CSRF-Token": token
				},
				//data: JSON.stringify(body),
				success: jQuery.proxy(function (data) {
					this.getView().setBusy(false);
					download("data:application/pdf;base64,"+data.pdfContent, "flexibleWF-"+workflowHana.WorkflowID+".pdf", "application/pdf");
				}, this),
				error: jQuery.proxy(function (error) {
					this.getView().setBusy(false);
				}, this),
			});
		},

		downloadPdfOld: async function(oEvent){
			window.jsPDF = window.jspdf.jsPDF;
			var workflowHana = this.getView().getBindingContext("hanaodata").getProperty("");
			var approvers= this.getView().getBindingContext("hanaodata").getProperty("ToApprovers");
			var userInfo = this.getOwnerComponent().getModel("userInfo").getData();

			var listWD = await this._readWorkDayService(userInfo.email);
			var userRole = "";
			if (listWD.data.length > 0){
				userRole = listWD.data[0]["wd:Descrizione_Posizione"];
			}

			var specialElementHandlers = {
				'#bypassme': function (element, renderer) {
					return true
				}
			};

			var doc = new jsPDF({
				orientation: "p", //set orientation
				unit: "pt", //set unit for document
				format: "a4" //set document standard
			  });
			/*doc.text(20, 20, 'Hello world!');
			doc.text(20, 30, 'This is client-side Javascript to generate a PDF.');

			// Add new page
			doc.addPage();
			doc.text(20, 20, 'Visit CodexWorld.com');*/
			if (workflowHana.fullDescription == null || workflowHana.fullDescription == undefined ){
				workflowHana.fullDescription = "";
			}

			var fullDescr = workflowHana.fullDescription.replace(/<p>/g,'<p style="word-spacing: 5px;">');

			var htmlCont = "<!DOCTYPE html><html><head><title>Summary</title>"+
			"<style>"+
			  	"body {	font-family: Arial;	font-variant: normal; font-size: 12px;}"+
				"p {word-spacing: 5px; }"+
				"table, th, td {"+
					"border: 1px solid black;"+
					"border-collapse: collapse;"+
					"min-width: 100px;"+
					"padding: 3px;"+
				"}"+
				"td.large {"+
					"min-width: 400px;"+
				"}"+
				"td.descrPos {"+
					"max-width: 300px;"+
				"}"+
				"td.approvalHead {"+
					"font-weight: bold;"+
				"}"+
				"h1 {"+
					"font-size: 24px;"+
					"line-height: 4vw;"+
				"}"+
				"footRight {"+
					"display: flex;"+
					"justify-content: flex-end;"+
					"margin-left: auto;"+
					"margin-right: 0;"+
				"}"+
			"</style>"+
			"</head><body>"+
			"<div id=\"capturePdfDown\" >"+
			"<img src=\"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QBsRXhpZgAASUkqAAgAAAADADEBAgAHAAAAMgAAABICAwACAAAAAgACAGmHBAABAAAAOgAAAAAAAABQaWNhc2EAAAMAAJAHAAQAAAAwMjIwAqAEAAEAAABkAAAAA6AEAAEAAAA2AAAAAAAAAP/iAihJQ0NfUFJPRklMRQABAQAAAhgAAAAAAhAAAG1udHJSR0IgWFlaIAAAAAAAAAAAAAAAAGFjc3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAD21gABAAAAANMtAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACWRlc2MAAADwAAAAdHJYWVoAAAFkAAAAFGdYWVoAAAF4AAAAFGJYWVoAAAGMAAAAFHJUUkMAAAGgAAAAKGdUUkMAAAGgAAAAKGJUUkMAAAGgAAAAKHd0cHQAAAHIAAAAFGNwcnQAAAHcAAAAPG1sdWMAAAAAAAAAAQAAAAxlblVTAAAAWAAAABwAcwBSAEcAQgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWFlaIAAAAAAAAG+iAAA49QAAA5BYWVogAAAAAAAAYpkAALeFAAAY2lhZWiAAAAAAAAAkoAAAD4QAALbPcGFyYQAAAAAABAAAAAJmZgAA8qcAAA1ZAAAT0AAAClsAAAAAAAAAAFhZWiAAAAAAAAD21gABAAAAANMtbWx1YwAAAAAAAAABAAAADGVuVVMAAAAgAAAAHABHAG8AbwBnAGwAZQAgAEkAbgBjAC4AIAAyADAAMQA2/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgANgBkAwEiAAIRAQMRAf/EABwAAQACAgMBAAAAAAAAAAAAAAAGBwQIAQIFA//EADwQAAEDAwIEBAEICAcAAAAAAAECAwQABREGEgchMVETIkFxYQgUMkJygZHSFSNSVmKSocEWNENTk7Hw/8QAGwEAAgMBAQEAAAAAAAAAAAAAAAYBAwUEAgf/xAAoEQABBAEDBAEEAwAAAAAAAAABAAIDEQQFEiExQYGRYRNRcZIUIiP/2gAMAwEAAhEDEQA/ANqaUpQhKUpQhKUpQhcUpWHcJzMFguyF7UjoPUnsKrkkbE0veaAUtaXGgss4/CsFVyh/OExxIb8ZRxtBzz7VHJd5h3FsplypDCD/AKbKccv4iRz/AOqjOpXmIcHdp5iTOmk+UOOpbQ3/ABE4yfYfiKXsjXhY/jlpHyaPgLSx9OL3bX2CfjjySrNmTosFlT02Q2w0kZKnFBIrtCmR58VuTDdQ8w4NyHEHIUK0y1xcLvcLy83qe4vLlNkEtKUShGRkYAGOhq0Pk5arS1Ke00/K8VpYL0YKz5T9ZPMffW8HOMbZqJaa7GqPQ30I8In00wtcd7SR2DgT6Ww9KUq9Zi49Kx5UqPEb3yX2mUZxucWEj+tQri9rpOiNOh5hKXLnKJbitq6ZH0ln4JyPckCqKsfDzWXEpBvtxmoQ08T4b81xWVjP1EgHCfwHauqDFD2/Ukdtaq3Po0BZW1kd9mS2HY7qHWz0W2oKB+8V9q1Bn2/V3B3UEZ5L4Sy8cpWysqjyQOqVJOOfP1GR1B9avHXOvVtcIE6ksZ8N6a2hDSjzLKlHCvcpwoe4r1LhlpbsNh3QoEl3fZWG9OiMvoZeksNvL+ihTgCj7CsqtQbZw6l3/h/cdaTL2gONh17wnUlandnXcsnkokchg55d6tr5Nd+uN10vOiXF1x9mC8luO64ckJKc7M9hjl2zjtUz4jY2FzXXXBUNkJNEK2Z0tqFGW++cJSPvPwFRNy82yWd9xYfeczyAHlSOw839fWu1x1BHdmrS7GEmOjyoSSNpPqrBBz8Ph71iS73BMZ0RrTGQ8UnYpaUlIVjkSAOYzSFqOqsnk2slAaOKLSbP36V+FtY2I9o5YbPcEBeTq+SiRaHGdMRmmZq/KHpBIDY9SAM5Pv71Whsusx1vDP8Ayq/JWU9pW+vPOOK1PIClqKiEb0pGewCsAfAV8zpC+fvPK/mX+asY5EZN72fqnLEijxWbWyA/kEn2QoVrODcbbLYcvz7D776DscCd5wPTmn4189B3NuDrKzPsqaC/nSEDY3g+Y47fGmuGF226tw7ncXrg4hsLClgq2ZPTzK5dAfvFccPIjFz1rZorCFFapKFc2wANp3d/hT1hxudpwc4OPBNjgV2oHtSz8rJiLnN3x/jab9/dbrJ6ClB0FK7h0SQtY/lTreOrrQhX+XTByj7RcVu/oE1sRDkW6Fp5mTHdaatTMZLiHM+RLITkH221DuMWghrexNphqSi6wyVx1L5JUD9JBPpnA59x71RttvvEvRDBs6Ys9uOjKUNPw/GSnvsVggj2JFabWDJhY1pot7KgnY4k917/ABj4k2HWWkFQbal0SmLgkth1vG9sIUPEHYZOMdeldZ97a078n2z2m4REyZV4S8plp0nDbfiFQc5evNJHv8CDXdx0Vqdmzv36fZpDEHxMuKU0G9uee7wxgpT8cAcxVj6shXHifw9st4s1rebmWhKo78NtkpS6ghOFM/tAbfojmM49BntMcUYY0H+oPPPQ1wvFuNnuoYOG2p06CVqHcwm1qbEoxvGIcKMcnNuNvTn1zj0q1eBmoI73DuZAgW9LMiC8n52WlH9chef1hJyQSElJ7YBGByFcnU2v7hpZnSLdtlqihtMXCISw6ptPIIJ7YAHQchz9au3ghoeRo7Tsj9KBKblPWFvNpVuDaUghKM9CeaifeuTUw6XFfE91OPSlZAQ14cBYC9kambAGLSjH2x+Wq14kWx3U91Zkv3RFtjto2MsbOWeqlZ3DJPL06AVdMiNLioJtZaI/2XQdo+yR09untUL1cy9e4C4N9tTTjPUEIVlKv2kqB5H/AN0r5vmMycZv+0p8MFewmbTclkc4kjbXzdkeCqc/wO1+8yP5B+euj+jWGGHHXNTI2tpKjtRk4HYBfOvYRwygLXhEqaT6AbT/AGqE6n03Nt11cjW6z3d9hHLxVsq859cYT0qrT2vzpNkc3Tk20Aeym2bVYoW26Y/qCo6t+ZuOGJJHc5q7/k6abkvPyNQz23G0N5ZjpWT5j9ZX9qg2heHt71Fd2W5ltlQbfne6+8Cnl2AIzk1tXZ7dHtVtjwoaA2wwgIQkegFODo43ODGsAqjYJPjrSWNT1Z7otkcxeHcEFoHHq1n0pSulLKUpShCUpShCUpShCUwOwpSirQmB2FMUpUUAhKUpUoSlKUIX/9k=\"/>"+
			"<table style=\"border: 1px solid black;\">"+
				"<tr><td class=\"approvalHead\">"+this.getView().getModel("i18n").getProperty("detailHanaID")+"</td><td>"+workflowHana.WorkflowID+"</td></tr>"+
				"<tr><td class=\"approvalHead\">"+this.getView().getModel("i18n").getProperty("detailSubject")+"</td><td>"+workflowHana.subject+"</td></tr>"+
				"<tr><td class=\"approvalHead\">"+this.getView().getModel("i18n").getProperty("detailAdditionalInfo")+"</td><td class=\"large\">"+workflowHana.additionalInfo+"</td></tr>"+
				"<tr><td class=\"approvalHead\">"+this.getView().getModel("i18n").getProperty("detailFullDescription")+"</td><td class=\"large\">"+fullDescr+"</td></tr>"+
			"</table><br/><br/>";

			htmlCont = htmlCont +
			"<table>";
			htmlCont = htmlCont +
			    	"<tr><td class=\"approvalHead\" colspan=\"4\">"+this.getView().getModel("i18n").getProperty("listRequesterLevel")+"</td></tr>";
			htmlCont = htmlCont +
			    	"<tr><td colspan=\"2\">"+userInfo.name+"</td><td class=\"descrPos\" colspan=\"2\">"+userRole+"</td></tr>";

			var currentLevel = 0;
			for (var a=0;a<approvers.length;a++){
				var approver = this.getView().getBindingContext("hanaodata").getProperty("/"+approvers[a]);
				var apprStatus = ((approver.status == null || approver.status == undefined || approver.status == "") ? "PENDING" : approver.status );
				var apprDate = ((approver.status_date == null || approver.status_date == undefined || approver.status_date == "" || approver.status_date == new Date(0)) ? "" : approver.status_date.getFullYear()+"/"+(approver.status_date.getMonth()+1)+"/"+approver.status_date.getDate() );
				if (approver.level != currentLevel){
					htmlCont = htmlCont +
			    	"<tr><td class=\"approvalHead\" colspan=\"4\">"+this.getView().getModel("i18n").getProperty("listApprovalLevel")+" "+approver.level+"</td></tr>";

				}
				htmlCont = htmlCont +
			    	"<tr><td>"+approver.name+" "+approver.surname+"</td><td class=\"descrPos\">"+approver.Descrizione_Posizione+"</td><td>"+apprStatus+"</td><td>"+apprDate+"</td></tr>";
			}
			htmlCont = htmlCont +
			"</table>";

			var today = new Date();

			htmlCont = htmlCont +
			"</div>"+
			"<div id=\"pageFooter\"><table style=\"border: none;font-size: 10px;\"><tr style=\"border: none;\"><td  style=\"border: none;\" class=\"large\"></td><td  style=\"border: none;\">Created on "+today.getDate()+"/"+(today.getMonth()+1)+"/"+today.getFullYear()+" "+today.getHours()+":"+today.getMinutes()+":"+today.getSeconds()+"</td></tr></table></div></div>"+
			"</body></html>";

			var parser = new DOMParser();
			var docHTML = parser.parseFromString(htmlCont, "text/html");

			var myElem=docHTML.getElementById('capturePdfDown');

			/*var opt = {
				margin:       1,
				filename:     'myfile.pdf',
				image:        { type: 'jpeg', quality: 0.98 },
				html2canvas:  { scale: 2 },
				jsPDF:        { unit: 'cm', format: 'a4', orientation: 'portrait' }
			  };
			html2pdf(docHTML.body,opt);*/

			/*doc.html(myElem, { 
				callback: function(doc2) {

					doc2.save("provaxxx.pdf")

				}.bind(this),
				margin: [10, 10, 10, 10],
				autoPaging: 'text',
				x: 0,
				y: 0,
				width: 570, //target width in the PDF document
				windowWidth: 950 //window width in CSS pixels
			});
			*/

			// /hana/catalog/generatePdf

			var appPath= this.getOwnerComponent().getTrueDestPath("hanaodatav4");

			var workflowHana = this.getView().getBindingContext("hanaodata").getProperty("");

			var body = { htmlContent: htmlCont};

			this.getView().setBusy(true);
			var token=  Utilities.fetchTokenOV4_2(this.getOwnerComponent());
			jQuery.ajax({
				method: "POST",
				url: appPath+"generatePdf",
				cache: false,
				contentType: "application/json",
				async: true,
				headers: {
					"X-CSRF-Token": token
				},
				data: JSON.stringify(body),
				success: jQuery.proxy(function (data) {
					this.getView().setBusy(false);
					download("data:application/pdf;base64,"+data.pdfContent, "flexibleWF-"+workflowHana.WorkflowID+".pdf", "application/pdf");
				}, this),
				error: jQuery.proxy(function (error) {
					this.getView().setBusy(false);
				}, this),
			});

			//doc.internal.write(0, "Tw") // <- add this
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

		onTestSendMail: function(oEvent){
			var appPath= this.getOwnerComponent().getTrueDestPath("hanaodatav4");
			var token=  Utilities.fetchTokenOV4(this.getView());

			var workflowHana = this.getView().getBindingContext("hanaodata").getProperty("");

			var taskContext = this.getOwnerComponent().getModel().getProperty("/taskContext");



			var body = { htmlContent : workflowHana.fullDescription, subject: workflowHana.subject, recipients: taskContext['approver_'+this.hana_number].email  };
			jQuery.ajax({
				method: "GET",
				url: appPath+"sendMail(hanaId=93)",
				cache: false,
				contentType: "application/json",
				async: true,
				headers: {
					"X-CSRF-Token": token
				},
				data: "" ,
				success: jQuery.proxy(function (data) {

				}, this),
				error: jQuery.proxy(function (error) {

				}, this),
			});
		},

		onTestSendTeams: function(oEvent){
			var appPath= this.getOwnerComponent().getTrueDestPath("hanaodatav4");
			var token=  Utilities.fetchTokenOV4(this.getView());

			var workflowHana = this.getView().getBindingContext("hanaodata").getProperty("");

			var taskContext = this.getOwnerComponent().getModel().getProperty("/taskContext");



			var body = { htmlContent : workflowHana.fullDescription, subject: workflowHana.subject, recipients: taskContext['approver_'+this.hana_number].email  };
			jQuery.ajax({
				method: "GET",
				url: appPath+"sendTeams(hanaId=143,level=1)",
				cache: false,
				contentType: "application/json",
				async: true,
				headers: {
					"X-CSRF-Token": token
				},
				data: "" ,
				success: jQuery.proxy(function (data) {

				}, this),
				error: jQuery.proxy(function (error) {

				}, this),
			});
		},

		onTestSendWD: function(oEvent){
			var appPath= this.getOwnerComponent().getTrueDestPath("hanaodatav4");
			var token=  Utilities.fetchTokenOV4(this.getView());


			var testtt = {
				ID_Position: [
					{id: "12422"}
				],
				Position_Description: "",
				Name: "",
				Surname: "",
				Employee_Mail: "",
				Username: ""
			};

			var testttStr = JSON.stringify(testtt)

			var body = { wdBodyString : testttStr  };
			jQuery.ajax({
				method: "POST",
				url: appPath+"WDUser",
				cache: false,
				contentType: "application/json",
				async: true,
				headers: {
					"X-CSRF-Token": token
				},
				data: JSON.stringify(body) ,
				success: jQuery.proxy(function (data) {

				}, this),
				error: jQuery.proxy(function (error) {

				}, this),
			});
		},

		onTestUpdateText: function(oEvent){
			var text= 
			"Gentile collega, <br/>"+
			"c'è una nuova richiesta di Workflow Libero alla tua attenzione.<br/>"+
			"Si prega di aprire (https://btp-development-qhnwx54i.launchpad.cfapps.eu10.hana.ondemand.com/site?siteId=bbc00aca-47fc-4e91-8fa2-c9eda1ead073#kupitflexiblewfmyinbox-display?sap-ui-app-id-hint=saas_approuter_kupit.flexiblewf.myinbox&/WfListMaster/ApproveWfDetail/[hana_id]-[level]-[number]) <br/>"+
			"per l'approvazione.<br/><br/>"+
			"Grazie";

			var newConf = new Object();
			newConf.ID = "TEAMS_TEMPLATE";
			newConf.language = "IT";
			newConf.content = text;

			var oHanaModel = this.getOwnerComponent().getModel("hanaodata");

			oHanaModel.create("/Configuration",newConf);

			
		},


		onInit: function() {
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.getView().setBusyIndicatorDelay(10);
			this.oRouter.getTarget("ApproveWfDetail").attachDisplay(jQuery.proxy(this.handleRouteMatched, this));
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
