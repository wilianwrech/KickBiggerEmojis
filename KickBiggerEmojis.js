// ==UserScript==
// @name         Kick: Bigger Emojis
// @namespace    https://github.com/wilianwrech/KickBiggerEmojis
// @version      0.1
// @description  Bigger emojis for blind people.
// @author       Wilian Webber Rech
// @match        https://kick.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=kick.com
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    const styles = `
.quick-emotes-holder .quick-emote-item,
.quick-emotes-holder .quick-emote-item > div > div,
.emote-picker-panel .section-emote-list-item,
.emote-picker-panel .emote-holder,
.emote-picker-panel .tab-item,
.emote-picker-panel .tab-item *,
.chat-emote-container {
    height: 2rem !important;
    width: 2rem !important;
    font-size: 2rem !important;
}

.quick-emotes-holder .quick-emote-item [class^=text] {
    display: none !important;
}
    `

    const styleSheet = document.createElement("style")
    styleSheet.innerText = styles
    document.head.appendChild(styleSheet)
})();