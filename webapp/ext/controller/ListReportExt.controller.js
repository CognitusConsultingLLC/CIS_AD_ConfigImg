sap.ui.define([
    "sap/m/MessageToast"
], function (MessageToast) {
    'use strict';

    return {

        urlCreation: function (s) {
            return encodeURIComponent(s).replace(/\'/g, "%27");
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
                //     var oAppState = oCrossAppNavigator.createEmptyAppState(this.getOwnerComponent());
                //     oCrossAppNavigator.toExternal({
                //         target: {
                //             semanticObject: "cgdcvariableeditor",
                //             action: "maintain"
                //         },
                //         params : { UsageType : [ usageType ] }
                //    });
                //var fixedURL = "#cgdcvariableeditor-maintain?UsageType=" + usageType;
                // const sHref = await Navigation.getHref({
                //     target : {
                //       semanticObject: "cgdcvariableeditor",
                //       action: "maintain"
                //     },
                //     params: {
                //       "UsageType": usageType
                //     }
                //   }, this);
                window.location.href = window.location.href.split('#')[0] + hash;
                return true;
            }

        }



    };
});