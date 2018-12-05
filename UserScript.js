// ==UserScript==
// @name         Imgur Resolver
// @namespace    https://github.com/GrumpyCrouton/Userscripts
// @version      1.0
// @description  This userscript is to replace imgur.com links with web.archive.org/web/ImgurLink
// @author       Altinok Darici
// @match        *://*.stackoverflow.com/*
// @match        *://*.stackexchange.com/*
// @grant        GM.xmlHttpRequest
// ==/UserScript==
// OPTIONS

(function() {
    'use strict';

    let images=document.getElementsByTagName("img");
    for(let img of images){
        let url=img.getAttribute('src');
        if(url.contains("imgur.com")){
            img.setAttribute('src', `http://web.archive.org/web/${url}`);
        }
    }
})();
