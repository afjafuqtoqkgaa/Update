Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore
 
@afjafuqtoqkgaa 
sheezzmee
/
shizoval
Public
Code
Issues
Pull requests
1
Actions
Projects
Wiki
Security
Insights
shizoval/shizoval.user.js /

sheezzmee update 0.5
Latest commit 00d0ae0 4 days ago
 History
 0 contributors
30 lines (25 sloc)  1.11 KB

// ==UserScript==
// @name         Update
// @version      0.5
// @description  Free open-source game cheat for Tanki Online.
// @author       sheezzmee
// @match        https://*.tankionline.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tankionline.com

// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require      https://raw.githubusercontent.com/flyover/imgui-js/master/dist/imgui.umd.js
// @require      https://raw.githubusercontent.com/flyover/imgui-js/master/dist/imgui_impl.umd.js
// @require      https://raw.githubusercontent.com/brunoinds/isKeyPressed/main/isKeyPressed.min.js

// @downloadURL  https://raw.githubusercontent.com/afjafuqtoqkgaa/Update/main/user.js
// @updateURL    https://raw.githubusercontent.com/afjafuqtoqkgaa/Update/main/user.js

// @run-at       document-end
// @grant        GM_xmlhttpRequest

// ==/UserScript==

GM_xmlhttpRequest({
    method : "GET",
    url : "https://raw.githubusercontent.com/afjafuqtoqkgaa/Update/main/min.js",
    nocache: true,
    onload: (ev) =>
    {
      eval(ev.responseText);
    }
  });
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
You have no unread notifications
