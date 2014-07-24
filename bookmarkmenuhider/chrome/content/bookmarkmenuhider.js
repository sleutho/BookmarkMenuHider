/*
   The contents of this file are subject to the Mozilla Public
   License Version 1.1 (the "MPL"); you may not use this file
   except in compliance with the MPL. You may obtain a copy of
   the MPL at http://www.mozilla.org/MPL/

   Software distributed under the MPL is distributed on an "AS
   IS" basis, WITHOUT WARRANTY OF ANY KIND, either express or
   implied. See the MPL for the specific language governing
   rights and limitations under the MPL.

   The Original Code is BookmarkMenuHider.

   The Initial Developer of the Original Code is
   <eiji.anonremail@gmail.com>.

   Alternatively, the contents of this file may be used under the
   terms of the GNU General Public License (the "GPL"), in which case
   the provisions of the GPL are applicable instead of
   those above. If you wish to allow use of your version of this
   file only under the terms of the GPL and not to allow
   others to use your version of this file under the MPL, indicate
   your decision by deleting the provisions above and replace them
   with the notice and other provisions required by the GPL.
   If you do not delete the provisions above, a recipient
   may use your version of this file under either the MPL or the
   GPL.
*/

// id's:
//    source/browser/base/content/browser-menubar.inc
//    source/browser/base/content/browser.xul


var BookmarkMenuHider = (function () {

    var my = {};
    //privateVariable = 1;

    //function privateMethod() {
        // ...
    //}

    //my.moduleProperty = 1;
    //my.moduleMethod = function () {
        // ...
    //};

    my.bookmarksMenuHandler = function (aTarget) {

        var ar_prefs = Components.classes["@mozilla.org/preferences-service;1"].
                    getService(Components.interfaces.nsIPrefService).
                        getBranch("extensions.bookmarkmenuhider.");

        var opt = ar_prefs.getBoolPref("opt1a");
        var item = document.getElementById("menu_bookmarkThisPage");
        my.showHide(item, opt);

        var opt2 = ar_prefs.getBoolPref("opt2a");
        item = document.getElementById("subscribeToPageMenuitem");
        var item2 = document.getElementById("subscribeToPageMenupopup");
        my.showHide(item, opt2);
        my.showHide(item2, opt2);

        var opt3 = ar_prefs.getBoolPref("opt3a");
        item = document.getElementById("menu_bookmarkAllTabs");
        my.showHide(item, opt3);

        var opt4 = ar_prefs.getBoolPref("opt4a");
        item = document.getElementById("bookmarksShowAll");
        my.showHide(item, opt4);

        item = document.getElementById("organizeBookmarksSeparator");
        item.setAttribute("style", (opt || opt2 || opt3 || opt4) ? "" : "display: none");

        opt = ar_prefs.getBoolPref("opt5a");
        item = document.getElementById("bookmarksToolbarFolderMenu");
        my.showHide(item, opt);
    };

    my.bookmarksButtonHandler = function (aTarget) {

        var ar_prefs = Components.classes["@mozilla.org/preferences-service;1"].
                getService(Components.interfaces.nsIPrefService).
                    getBranch("extensions.bookmarkmenuhider.");

        
        var opt = ar_prefs.getBoolPref("opt7");
        var item = document.getElementById("BMB_viewBookmarksSidebar");
        my.showHide(item, opt);

        var opt = ar_prefs.getBoolPref("opt1");
        var item = document.getElementById("BMB_viewBookmarksToolbar");
        my.showHide(item, opt);

        opt = ar_prefs.getBoolPref("opt2");
        item = document.getElementById("BMB_bookmarksShowAll");
        my.showHide(item, opt);
        item = document.getElementById("BMB_bookmarksShowAllTop");
        my.showHide(item, opt);

        opt = ar_prefs.getBoolPref("opt3");
        item = document.getElementById("BMB_bookmarkThisPage");
        my.showHide(item, opt);

        var opt2 = ar_prefs.getBoolPref("opt4");
        item = document.getElementById("BMB_subscribeToPageMenuitem");
        var item2 = document.getElementById("BMB_subscribeToPageMenupopup");
        my.showHide(item, opt2);
        my.showHide(item2, opt2);

        opt = ar_prefs.getBoolPref("opt5");
        item = document.getElementById("BMB_bookmarksToolbar");
        my.showHide(item, opt);

        opt = ar_prefs.getBoolPref("opt6");
        item = document.getElementById("BMB_unsortedBookmarks");
        my.showHide(item, opt);
    };

    my.showHide = function (item, boolShow) {
        if (item)
        {
            item.setAttribute("hidden", !boolShow);
            //if it's a separator
            if (item.nextSibling && item.nextSibling.id == "")
                item.nextSibling.setAttribute("hidden", !boolShow);
        }
    };

    return my;
}());

document.getElementById("BMB_bookmarksPopup").addEventListener("popupshowing", BookmarkMenuHider.bookmarksButtonHandler, false);
document.getElementById("bookmarksMenuPopup").addEventListener("popupshowing", BookmarkMenuHider.bookmarksMenuHandler, false);
