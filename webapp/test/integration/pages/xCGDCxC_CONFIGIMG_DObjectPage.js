sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'cgdc.configimg',
            componentId: 'xCGDCxC_CONFIGIMG_DObjectPage',
            contextPath: '/xCGDCxC_CONFIGIMG_D'
        },
        CustomPageDefinitions
    );
});