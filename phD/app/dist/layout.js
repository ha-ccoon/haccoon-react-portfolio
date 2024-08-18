"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var google_1 = require("next/font/google");
var react_1 = require("react");
var navigation_bar_1 = require("@/components/navigation/navigation-bar");
require("@/styles/globals.scss");
require("@/styles/index.scss");
require("./stars.scss");
var app_module_scss_1 = require("./app.module.scss");
var inter = google_1.IBM_Plex_Sans_KR({
    weight: ['400', '500', '600'],
    subsets: ['latin'],
    display: 'swap'
});
exports.metadata = {
    title: 'Kyujin Ko',
    description: 'Resume'
};
function RootLayout(_a) {
    var children = _a.children;
    return (react_1["default"].createElement("html", { lang: "en", className: inter.className },
        react_1["default"].createElement("body", null,
            react_1["default"].createElement(navigation_bar_1["default"], null),
            react_1["default"].createElement("div", { id: "stars" }),
            react_1["default"].createElement("main", { className: app_module_scss_1["default"].section }, children))));
}
exports["default"] = RootLayout;
