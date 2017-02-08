"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var product_service_1 = require("./product-service");
var ProductComponent = (function () {
    function ProductComponent(_productService) {
        var _this = this;
        this._productService = _productService;
        this.pageTitle = 'XUEFEI products';
        this.imgWidth = 40;
        this.showHideImg = false;
        this.filterVal = '';
        //this.products = _productService.getData();
        _productService.getData().then(function (product_response) { return _this.products = product_response; });
    }
    ProductComponent.prototype.toggleImg = function () {
        //alert('click show img');
        this.showHideImg = !this.showHideImg;
    };
    ;
    ProductComponent.prototype.ngOnInit = function () {
        console.log('OnInit method called');
        //this._productService.getProductV2();
    };
    ProductComponent.prototype.ratingClickProduct = function (msg) {
        alert(msg);
    };
    return ProductComponent;
}());
ProductComponent = __decorate([
    core_1.Component({
        selector: 'ml-products',
        templateUrl: 'app/products/product-list.component.html',
        styles: ['thead{color:#FF000;}', 'thead{backgroud-color:red;}'],
        providers: [product_service_1.ProductService]
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductComponent);
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=product-list.component.js.map