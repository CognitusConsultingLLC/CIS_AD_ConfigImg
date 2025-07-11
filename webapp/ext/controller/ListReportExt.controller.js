sap.ui.define(['sap/ui/core/mvc/ControllerExtension'], function (ControllerExtension) {
	'use strict';

	return ControllerExtension.extend('cgdc.configimg.ext.controller.ListReportExt', {
		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
		override: {
			/**
             * Called when a controller is instantiated and its View controls (if available) are already created.
             * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
             * @memberOf cgdc.configimg.ext.controller.ListReportExt
             */
			onInit: function () {
				// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
				var oModel = this.base.getExtensionAPI().getModel();
			},

			routing: {
                onBeforeNavigation: async function(oContextInfo) {
                    var oLineContextData = oContextInfo.bindingContext,
                        oNav = this.base.getExtensionAPI().intentBasedNavigation,
                        oRouting = this.base.getExtensionAPI().routing;
						var oSelectedobject = oLineContextData.getObject();
            var oAction = oSelectedobject.Action;
            var oSementicObject = oSelectedobject.Semanticobject;
            var cubcokey = oSelectedobject.Cubcokey;
            var usageType = oSelectedobject.UsageType
            const oNavigation = await sap.ushell.Container.getServiceAsync("Navigation");
            var oCrossAppNavigator = sap.ushell.Container.getService("CrossApplicationNavigation");
            if (oSementicObject != 'BusinessConfiguration' && oSementicObject !== 'cgdcvariableeditor') {
                var oAppState = oCrossAppNavigator.createEmptyAppState(this.base.getAppComponent());
                var hash = (oCrossAppNavigator && oCrossAppNavigator.hrefForExternal({
                    target: {
                        semanticObject: oSementicObject,
                        action: oAction
                    },
                    appStateKey: oAppState.getKey()

                })) || "";

                oCrossAppNavigator.toExternal({
                    target: {
                        shellHash: hash
                    }
                });
                // window.location.href = window.location.href.split('#')[0] + hash;
                // const url = window.location.href.split('#')[0] + hash;
                // sap.m.URLHelper.redirect(url, true);
                window.location.href = window.location.href.split('#')[0] + hash;
                // oCrossAppNavigator.toExternal({
                //     target: {
                //         semanticObject: oSementicObject,
                //         action: oAction
                //     }
                // });
            }

            if (oSementicObject == 'BusinessConfiguration') {
                var oAppState = oCrossAppNavigator.createEmptyAppState(this.base.getAppComponent());
                var fixedURL = "&#BusinessConfiguration-maintain" + cubcokey + "?sap-xapp-state=" + oAppState.getKey();
                window.location.href = window.location.href.split('#')[0] + fixedURL;
            //    const url = window.location.href.split('#')[0] + fixedURL;
            //     sap.m.URLHelper.redirect(url, true);
            }

            if (oSementicObject == 'cgdcvariableeditor') {
                var oAppState = oCrossAppNavigator.createEmptyAppState(this.base.getAppComponent());
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
                // const url = window.location.href.split('#')[0] + hash;
                // sap.m.URLHelper.redirect(url, true);
                return true;
            }
                    return true;
                }
            }
		}
	});
});
