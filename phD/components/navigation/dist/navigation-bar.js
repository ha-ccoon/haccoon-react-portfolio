"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var constants_1 = require("../constants");
var navigation_module_scss_1 = require("./navigation.module.scss");
function NavigationBar() {
    return (React.createElement("nav", { className: navigation_module_scss_1["default"].nav }, constants_1.navigationItems.map(function (element) { return (React.createElement(link_1["default"], { className: navigation_module_scss_1["default"].navItems, key: element.key, href: element.route }, element.item)); })));
}
exports["default"] = NavigationBar;
