sap.ui.define([
	"sap/ui/base/ManagedObject",
	"sap/m/MessageBox",
	"./utilities",
	"sap/ui/core/routing/History"
], function(ManagedObject, MessageBox, Utilities, History) {

	return ManagedObject.extend("kupit.flexiblewf.myinbox.controller.SelectDialog1", {
		constructor: function(oView) {
			this._oView = oView;
			this._oControl = sap.ui.xmlfragment(oView.getId(), "kupit.flexiblewf.myinbox.view.SelectDialog1", this);
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

		open: async function() {
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
			oModel.setProperty("/UtentiSCP",[]);
			this.getView().byId("sap_m_SelectDialog_0").setBusyIndicatorDelay(100);
			this.getView().byId("sap_m_SelectDialog_0").setBusy(true);
			
			const oAnswer = await Utilities.getADGroupId(this.getOwnerComponent());
			const oGroupID = oAnswer.answer;
			var userApiUrl = this.getOwnerComponent().getTrueDestPath("userapi") + oGroupID + "/members"; 
			jQuery.ajax({
				method: "GET",
				url: userApiUrl,
				cache: false,
				contentType: "application/json",
				async: true,
				headers: {
					"X-CSRF-Token": "fetch"
				},
				//data: JSON.stringify(body),
				success: jQuery.proxy(function (data) {
					var oModel = this.getOwnerComponent().getModel();
					for (var i=0;i<data.value.length;i++){
						var selectedAppr = data.value[i];
						if ( selectedAppr.mail != undefined && selectedAppr.mail != null && selectedAppr.mail[0] != undefined && selectedAppr.mail[0]!= null ){
							data.value[i].currentEmail=data.value[i].mail[0].value;
						}
					}
					oModel.setProperty("/UtentiSCP",data.value);
					this.getView().byId("sap_m_SelectDialog_0").setBusy(false);
					//resolve(data);
				}, this),
				error: jQuery.proxy(function (error) {
					this.getView().byId("sap_m_SelectDialog_0").setBusy(false);
					//reject(error);
				}, this),
			});


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
		_onSelectDialogLiveChange: function(oEvent) {
			var sControlId = "sap_m_SelectDialog_0";
			var oControl = this.getView().byId(sControlId);

			// Get the search query, regardless of the triggered event ('query' for the search event, 'newValue' for the liveChange one, 'value' for the liveChange of SelectDialogs).
			var sQuery = oEvent.getParameter("query") || oEvent.getParameter("newValue") || oEvent.getParameter("value");
			var sSourceId = oEvent.getSource().getId();

			if (sQuery == undefined || sQuery == null || sQuery == "" ){
				sQuery = "";
			} else {
				sQuery = "?$search=\"displayName:"+sQuery+"\" OR \"userPrincipalName:"+sQuery+"\"";
			}
			this.getView().byId("sap_m_SelectDialog_0").setBusy(true);
			return new Promise(async function(fnResolve) {
				
				const oAnswer = await Utilities.getADGroupId(this.getOwnerComponent());
				const oGroupID = oAnswer.answer;
				var userApiUrl = this.getOwnerComponent().getTrueDestPath("userapi") + oGroupID + "/members" + sQuery; 
				jQuery.ajax({
					method: "GET",
					url: userApiUrl,
					cache: false,
					contentType: "application/json",
					async: true,
					headers: {
						"X-CSRF-Token": "fetch",
						"ConsistencyLevel": "eventual"
					},
					//data: JSON.stringify(body),
					success: jQuery.proxy(function (data) {
						var oModel = this.getOwnerComponent().getModel();
						for (var i=0;i<data.value.length;i++){
							var selectedAppr = data.value[i];
							if ( selectedAppr.mail != undefined && selectedAppr.mail != null && selectedAppr.mail[0] != undefined && selectedAppr.mail[0]!= null ){
								data.value[i].currentEmail=selectedAppr.mail[0].value;
							}
						}
						oModel.setProperty("/UtentiSCP",data.value);
						this.getView().byId("sap_m_SelectDialog_0").setBusy(false);
						//resolve(data);
					}, this),
					error: jQuery.proxy(function (error) {
						this.getView().byId("sap_m_SelectDialog_0").setBusy(false);
						//reject(error);
						
					}, this),
				});
				/*var aFinalFilters = [];

				var aFilters = [];
				// 1) Search filters (with OR)
				if (sQuery && sQuery.length > 0) {

				}

				var aFinalFilters = aFilters.length > 0 ? [new sap.ui.model.Filter(aFilters, false)] : [];
				var oBindingOptions = this.updateBindingOptions(sControlId, {
					filters: aFinalFilters
				}, sSourceId);
				var oBindingInfo = oControl.getBindingInfo("items");
				if (oBindingInfo) {
					oControl.bindAggregation("items", {
						model: oBindingInfo.model,
						path: oBindingInfo.path,
						parameters: oBindingInfo.parameters,
						template: oBindingInfo.template,
						templateShareable: true,
						sorter: oBindingOptions.sorters,
						filters: oBindingOptions.filters
					});
				}*/
			}.bind(this)).catch(function(err) {
				if (err !== undefined) {
					MessageBox.error(err.message);
				}
			});

		},
		updateBindingOptions: function(sCollectionId, oBindingData, sSourceId) {
			this.mBindingOptions = this.mBindingOptions || {};
			this.mBindingOptions[sCollectionId] = this.mBindingOptions[sCollectionId] || {};

			var aSorters = this.mBindingOptions[sCollectionId].sorters;
			var aGroupby = this.mBindingOptions[sCollectionId].groupby;

			// If there is no oBindingData parameter, we just need the processed filters and sorters from this function
			if (oBindingData) {
				if (oBindingData.sorters) {
					aSorters = oBindingData.sorters;
				}
				if (oBindingData.groupby || oBindingData.groupby === null) {
					aGroupby = oBindingData.groupby;
				}
				// 1) Update the filters map for the given collection and source
				this.mBindingOptions[sCollectionId].sorters = aSorters;
				this.mBindingOptions[sCollectionId].groupby = aGroupby;
				this.mBindingOptions[sCollectionId].filters = this.mBindingOptions[sCollectionId].filters || {};
				this.mBindingOptions[sCollectionId].filters[sSourceId] = oBindingData.filters || [];
			}

			// 2) Reapply all the filters and sorters
			var aFilters = [];
			for (var key in this.mBindingOptions[sCollectionId].filters) {
				aFilters = aFilters.concat(this.mBindingOptions[sCollectionId].filters[key]);
			}

			// Add the groupby first in the sorters array
			if (aGroupby) {
				aSorters = aSorters ? aGroupby.concat(aSorters) : aGroupby;
			}

			var aFinalFilters = aFilters.length > 0 ? [new sap.ui.model.Filter(aFilters, true)] : undefined;
			return {
				filters: aFinalFilters,
				sorters: aSorters
			};

		},
		onInit: function() {

			this._oDialog = this.getControl();

		},
		onExit: function() {
			this._oDialog.destroy();

		}

	});
}, /* bExport= */ true);
