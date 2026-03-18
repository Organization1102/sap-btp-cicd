sap.ui.define([
	"./utilities"
], function () {
	"use strict";

	// class providing static utility methods to retrieve entity default values.

	return {

		getDMSRepositoryId: function (oComponent) {
			return new Promise(async function (resolve) {
				var appPath = oComponent.getTrueDestPath("hanaodatav4");
				var token = this.fetchTokenOV4_2(oComponent);

				jQuery.ajax({
					method: "GET",
					url: appPath + "/getDMSRepositoryId()",
					cache: false,
					contentType: "application/json",
					async: true,
					headers: {
						"X-CSRF-Token": token
					},
					success: jQuery.proxy(function (data) {
						resolve({ status: "OK", answer: data.value });
					}, this),
					error: jQuery.proxy(function (error) {
						resolve({ status: "KO", answer: data.value });
					}, this),
				});
			}.bind(this));
		},

		loadRepositories: function (oView, session) {
			return new Promise(async function (resolve, reject) {
				session.loadRepositories({
					request: {
						success: async function (data) {
							if (oView.getOwnerComponent().repositoryId == null || oView.getOwnerComponent().repositoryId == "") {
								var oAnswer = await this.getDMSRepositoryId(oView.getOwnerComponent());
								oView.getOwnerComponent().repositoryId = oAnswer.answer;
							}
							var baseUrlDS = oView.getOwnerComponent().getTrueDestPath("docservice");
							for (var i in session.repositories) {
								var repo = session.repositories[i];
								repo.repositoryUrl = baseUrlDS + "browser/" + repo.repositoryId;
								repo.rootFolderUrl = baseUrlDS + "browser/" + repo.repositoryId + "/root";

								// if (repo.repositoryName == "Doc_Repository_Kupit_dev"){
								// 	session.defaultRepository = repo;
								// 	break;
								// }
								if (repo.repositoryId == oView.getOwnerComponent().repositoryId) {
									session.defaultRepository = repo;
									break;
								}

							}
							resolve({ status: "OK", answer: data });
						}.bind(this),
						error: function (e) {
							resolve({ status: "KO", answer: e });
						}
					}
				});
			}.bind(this));
		},

		getRepositoryInfo: function (session) {
			return new Promise(async function (resolve, reject) {
				session.getRepositoryInfo({
					request: {
						success: function (info) {
							resolve({ status: "OK", answer: info });
						}.bind(this),
						error: function (e) {
							resolve({ status: "KO", answer: e });
						}
					}
				});
			});
		},

		getChildren: function (session, currentId) {
			return new Promise(async function (resolve, reject) {
				session.getChildren(currentId, {
					request: {
						success: function (info) {
							resolve({ status: "OK", answer: info });
						}.bind(this),
						error: function (e) {
							resolve({ status: "KO", answer: e });
						}
					}
				});
			});
		},

		getPath: function (session, currentId, path, innerFolder) {
			return new Promise(function (resolve, reject) {
				session.getObjectByPath(path, {
					includeRelationships: 'both',
					request: {
						success: function (data) {
							resolve({ status: "OK", answer: data });
						},
						error: function (e) {
							session.createFolder(currentId, innerFolder + "", null, null, null, {
								request: {
									success: function (data2) {
										resolve({ status: "OK", answer: data2 });
									}.bind(this),
									error: function (e2) {
										resolve({ status: "KO", answer: e2 });
									}
								},
								succinct: false
							});
						}
					}
				});
			});
		},
		createFolder: function (session, id, path) {
			return new Promise(function (resolve, reject) {
				session.createFolder(id, path + "", null, null, null, {
					request: {
						success: function (data) {
							resolve({ status: "OK", answer: data });
						},
						error: function (e) {
							resolve({ status: "KO", answer: e });
						}
					}
				});
			});
		},

		createDocument: function (session, id, file) {
			return new Promise(function (resolve, reject) {
				session.createDocument(id, new File([new Blob([file.fileContent])], file.fileName), file.fileName, file.fileType, "major", null, null, null, {
					request: {
						success: jQuery.proxy(function (data) {
							resolve({ status: "OK", answer: data });
						}, this),
						error: jQuery.proxy(function (e) {
							resolve({ status: "KO", answer: e });
						}, this)
					}
				});
			});
		},

		deleteDocument: function (session, idDoc) {
			return new Promise(function (resolve, reject) {
				session.deleteObject(idDoc, true, {
					request: {
						success: function () {
							resolve({ status: "OK", answer: {} });
						}.bind(this),
						error: function (e) {
							if (e.status == 200) {
								resolve({ status: "OK", answer: {} });
							} else {
								resolve({ status: "KO", answer: e });
							}
						}.bind(this)
					}
				});
			});
		},

		fetchTokenOV4: function (oView) {
			var token;
			var baseUrlWFR = oView.getOwnerComponent().getTrueDestPath("hanaodatav4");
			$.ajax({
				url: baseUrlWFR + "$metadata",
				method: "GET",
				async: false,
				headers: {
					"X-CSRF-Token": "Fetch"
				},
				success: function (result, xhr, data) {
					token = data.getResponseHeader("X-CSRF-Token");
				}
			});
			return token;
		},

		fetchTokenOV4_2: function (oComponent) {
			var token;
			var baseUrlWFR = oComponent.getTrueDestPath("hanaodatav4");
			$.ajax({
				url: baseUrlWFR + "$metadata",
				method: "GET",
				async: false,
				headers: {
					"X-CSRF-Token": "Fetch"
				},
				success: function (result, xhr, data) {
					token = data.getResponseHeader("X-CSRF-Token");
				}
			});
			return token;
		},

		downloadDocument: function (session, idDoc) {
			var url = session.getContentStreamURL(idDoc, "attachment");
			window.open(url, "_blank").focus();
		},

		getADGroupId: function (oComponent) {
			return new Promise(async function (resolve) {
				var appPath = oComponent.getTrueDestPath("hanaodatav4");
				var token = this.fetchTokenOV4_2(oComponent);

				jQuery.ajax({
					method: "GET",
					url: appPath + "/getADGroupId()",
					cache: false,
					contentType: "application/json",
					async: true,
					headers: {
						"X-CSRF-Token": token
					},
					success: jQuery.proxy(function (data) {
						resolve({ status: "OK", answer: data.value });
					}, this),
					error: jQuery.proxy(function (error) {
						resolve({ status: "KO", answer: data.value });
					}, this),
				});
			}.bind(this));
		},

	};
});
