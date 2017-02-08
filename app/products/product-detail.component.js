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
var router_1 = require("@angular/router");
var product_service_1 = require("./product-service");
var ProductDetailComponent = (function () {
    function ProductDetailComponent(_activatedRoute, _productService, _router) {
        var _this = this;
        this._activatedRoute = _activatedRoute;
        this._productService = _productService;
        this._router = _router;
        this.showHideImg = false;
        this.pageTitle = 'product detail';
        this.productId = _activatedRoute.snapshot.params['id'];
        //this.product = _productService.getProduct(this.productId);
        _productService.getProduct(this.productId).then(function (product_response) { return _this.product = product_response; });
    }
    ProductDetailComponent.prototype.toggleImg = function () {
        //alert('click show img');
        this.showHideImg = !this.showHideImg;
    };
    ProductDetailComponent.prototype.ratingClickProduct = function (msg) {
        this.pageTitle = 'Product Detail: ' + msg;
        //alert(msg);
    };
    ProductDetailComponent.prototype.onBack = function () {
        this._router.navigate(['/products']);
    };
    return ProductDetailComponent;
}());
ProductDetailComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/products/product-detail.component.html',
        providers: [product_service_1.ProductService]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, product_service_1.ProductService, router_1.Router])
], ProductDetailComponent);
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=product-detail.component.js.map