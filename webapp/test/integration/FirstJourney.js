sap.ui.define([
    "sap/ui/test/opaQunit"
], function (opaTest) {
    "use strict";

    var Journey = {
        run: function() {
            QUnit.module("First journey");

            opaTest("Start application", function (Given, When, Then) {
                Given.iStartMyApp();

                Then.onThexCGDCxC_CONFIGIMG_DList.iSeeThisPage();

            });


            opaTest("Navigate to ObjectPage", function (Given, When, Then) {
                // Note: this test will fail if the ListReport page doesn't show any data
                
                When.onThexCGDCxC_CONFIGIMG_DList.onFilterBar().iExecuteSearch();
                
                Then.onThexCGDCxC_CONFIGIMG_DList.onTable().iCheckRows();

                When.onThexCGDCxC_CONFIGIMG_DList.onTable().iPressRow(0);
                Then.onThexCGDCxC_CONFIGIMG_DObjectPage.iSeeThisPage();

            });

            opaTest("Teardown", function (Given, When, Then) { 
                // Cleanup
                Given.iTearDownMyApp();
            });
        }
    }

    return Journey;
});