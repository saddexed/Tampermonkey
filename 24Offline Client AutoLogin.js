// ==UserScript==
// @name         24Offline Client AutoLogin
// @version      1
// @description  try to take over the world!
// @author       You
// @match        https://10.10.0.1/*
// @match        http://10.10.0.1/*
// @match        https://internet.lpu.in/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=0.1
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.getElementsByName("username")[0].value = "username";
    document.getElementsByName("password")[0].value = "password";
    document.getElementById("loginbtn").disabled = false;
    return appendUserName();
})();