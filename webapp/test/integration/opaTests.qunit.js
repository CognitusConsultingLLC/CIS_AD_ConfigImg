sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'cgdc/configimg/test/integration/FirstJourney',
		'cgdc/configimg/test/integration/pages/xCGDCxC_CONFIGIMG_DList',
		'cgdc/configimg/test/integration/pages/xCGDCxC_CONFIGIMG_DObjectPage'
    ],
    function(JourneyRunner, opaJourney, xCGDCxC_CONFIGIMG_DList, xCGDCxC_CONFIGIMG_DObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('cgdc/configimg') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThexCGDCxC_CONFIGIMG_DList: xCGDCxC_CONFIGIMG_DList,
					onThexCGDCxC_CONFIGIMG_DObjectPage: xCGDCxC_CONFIGIMG_DObjectPage
                }
            },
            opaJourney.run
        );
    }
);