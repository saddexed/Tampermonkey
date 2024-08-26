// ==UserScript==
// @name         Jionet Automate
// @version      1.0
// @description  Script to autologin to Jionet
// @author       saddexed
// @match        https://jionet2.jio.in:8443/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=jio.in
// @run-at       document-idle
// @grant        none
// ==/UserScript==


//Sleep Function
async function sleep(x) {
    await new Promise((r) => setTimeout(r, x));
};

//Element Presence Check
async function checkLoad(seggs, x) {
    while (document.getElementsByClassName(seggs).length != (1 || 7)) {
        console.log("seggs" + x);
        await sleep(100);
    }
    await sleep(1000);
};

// Main
(async function() {
    'use strict';

    //Enter Mobile Number
    await checkLoad("tab-content", 1);
    document.getElementsByClassName("form-control")[0].value = ""; 
    document.getElementsByClassName("control")[0].click();
    document.getElementsByName("action")[0].click();

    //Request OTP
    await checkLoad("btn-label", 2);
    //await sleep(1000);
    document.getElementsByName("action")[0].click();

    // Enter OTP
    await checkLoad("tab-content", 3);
    document.getElementsByName("otppassword")[0].focus();
    var olen = 0;
    while (olen != 6) {
        console.log(olen);
        olen = document.getElementsByName("otppassword")[0].value.length;
        await sleep(200);
    }
    document.getElementsByName("action")[0].click();

    //Continue Browsing
    await checkLoad("btn-label", 4);
    document.getElementsByClassName("btn-label")[0].click();

    // Logged In
    await checkLoad("btn-label", 5);
    if (document.getElementsByClassName("btn-label")[0].textContent == 'Logout & disconnect Wi-Fi') {
        console.log("done");
    }

    

    // Your code here...
})();