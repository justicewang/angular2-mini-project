"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
//create a component-selector and template
var AppComponent = (function () {
    function AppComponent() {
        //create a variable, no keyword, name : type = value
        this.pageTitle = 'Marlabs Training _ Angular2 _ xuefei';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'ml-app',
        template: "\n    \t<div class=\"navbar navbar-default\">\n    \t\t<ul class=\"nav navbar-nav\">\n    \t\t\t<li>\n    \t\t\t\t<a [routerLink]=\"['/welcome']\">welcome</a>\n    \t\t\t</li>\n    \t\t\t<li>\n    \t\t\t\t<a [routerLink]=\"['/products']\">Products</a>\n    \t\t\t</li>\n    \t\t</ul>\n    \t</div>\n        <div>\n            <h1>{{pageTitle}}</h1> <br />\n            <router-outlet></router-outlet>\n        </div>\n    "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map