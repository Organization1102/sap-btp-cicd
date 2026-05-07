/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "kupit/flexiblewf/docmanage/model/models"
    ],
    function (UIComponent, Device, models) {
        "use strict";

        return UIComponent.extend("kupit.flexiblewf.docmanage.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {

                var compData = this.getComponentData();
			
                if (compData.startupParameters != undefined && compData.startupParameters.dmsRepositoryId != undefined){
                    this.dmsRepositoryId = compData.startupParameters.dmsRepositoryId[0];
                }

                if (compData.startupParameters != undefined && compData.startupParameters.dmsObjectId != undefined){
                    this.dmsObjectId = compData.startupParameters.dmsObjectId[0];
                }
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");
            }
        });
    }
);