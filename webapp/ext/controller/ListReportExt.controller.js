sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        
        urlCreation: function (s) {
			return encodeURIComponent(s).replace(/\'/g, "%27");
		},
        onListNavigationExtension: function(oEvent) {
           
			var oSelectedobject =oEvent.getSource().getBindingContext().getObject();
            var oAction = oSelectedobject.Action;
            var oSementicObject = oSelectedobject.Semanticobject;
            var cubcokey = oSelectedobject.Cubcokey;
            var oCrossAppNavigator = sap.ushell.Container.getService("CrossApplicationNavigation");
            if ( oSementicObject != 'BusinessConfiguration') {
                oCrossAppNavigator.toExternal({
                    target: {
                        semanticObject: oSementicObject,
                        action: oAction
                    }
               }); }
               
                if ( oSementicObject == 'BusinessConfiguration') {
                    var fixedURL = "&#BusinessConfiguration-maintain" + cubcokey;
                    window.location.href = window.location.href.split('#')[0] + fixedURL;
                }
            }
            
         

    };
});