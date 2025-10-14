sap.ui.define([], function () {
    'use strict';

    return {
        onSelectionChange: function (oEvent) {
            const sNewDeliveryPreferenceCode = oEvent.getParameter("item").getKey();
            const oSegmBtn = oEvent.getSource();
            oSegmBtn.getBindingContext().setProperty("DeliveryPreference_code", sNewDeliveryPreferenceCode);
        }
    };
});