(function() {
    "use strict";
    var today = new Date(),
        day = today.getDate(),
        month = today.getMonth() + 1; //January is 0!

    var addresses = "DL-PP-MPP-Team-ALL@paypal.com",
        subject = month + "/" + day + " MPP release complete <EOM>",
        href = "mailto:" + addresses + "?" + "subject=" + subject + "&";

    if (window) window.location.href = href;
}());