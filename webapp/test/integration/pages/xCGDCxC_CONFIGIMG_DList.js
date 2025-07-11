sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'cgdc.configimg',
            componentId: 'xCGDCxC_CONFIGIMG_DList',
            contextPath: '/xCGDCxC_CONFIGIMG_D'
        },
        CustomPageDefinitions
    );
});