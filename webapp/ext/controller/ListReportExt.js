sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        onCustomAction: function(oEvent) {
            MessageToast.show("Custom handler invoked.");
        },

        onListNavigationExtension: async function (oEvent) {

            var oSelectedobject = oEvent.getSource().getBindingContext().getObject();
            var oAction = oSelectedobject.Action;
            var oSementicObject = oSelectedobject.Semanticobject;
            var cubcokey = oSelectedobject.Cubcokey;
            var usageType = oSelectedobject.UsageType
            const oNavigation = await sap.ushell.Container.getServiceAsync("Navigation");
            var oCrossAppNavigator = sap.ushell.Container.getService("CrossApplicationNavigation");
            if (oSementicObject != 'BusinessConfiguration' && oSementicObject !== 'cgdcvariableeditor') {
                oCrossAppNavigator.toExternal({
                    target: {
                        semanticObject: oSementicObject,
                        action: oAction
                    }
                });
            }

            if (oSementicObject == 'BusinessConfiguration') {
                var fixedURL = "&#BusinessConfiguration-maintain" + cubcokey;
                window.location.href = window.location.href.split('#')[0] + fixedURL;
            }

            if (oSementicObject == 'cgdcvariableeditor') {
                var oAppState = oCrossAppNavigator.createEmptyAppState(this.getOwnerComponent());
                var hash = (oCrossAppNavigator && oCrossAppNavigator.hrefForExternal({
                    target: {
                        semanticObject: "cgdcvariableeditor",
                        action: "maintain"
                    },
                    params: {
                        "UsageType": usageType,
                    },

                    appStateKey: oAppState.getKey()

                })) || "";

                oCrossAppNavigator.toExternal({
                    target: {
                        shellHash: hash
                    }
                });
                window.location.href = window.location.href.split('#')[0] + hash;
                return true;
            }

        }
    };
});
