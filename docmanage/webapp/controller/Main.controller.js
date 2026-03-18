sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("kupit.flexiblewf.docmanage.controller.Main", {
            onInit: function () {
                var kkk = 1;
            },
            onComponentCreate: function(oEvent){
                var repId = this.getOwnerComponent().dmsRepositoryId;
                var objId = this.getOwnerComponent().dmsObjectId;

                oEvent.getParameters().component.setProperty("objectId",objId);
                oEvent.getParameters().component.setProperty("repositoryId",repId);
            }
        });
    });
