import { Component } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';
import { ProductService } from './product-service';

@Component({
	templateUrl: 'app/products/product-detail.component.html',
	providers : [ProductService]
})

export class ProductDetailComponent {
	productId : number;
	product: IProduct;
	showHideImg : boolean = false;
	pageTitle : string  = 'product detail';
	constructor(private _activatedRoute : ActivatedRoute, private _productService : ProductService, private _router: Router) {
		this.productId = _activatedRoute.snapshot.params['id'];
		//this.product = _productService.getProduct(this.productId);
		_productService.getProduct(this.productId).then(product_response => this.product = product_response);
	}
	 toggleImg() : void {
	   //alert('click show img');
	   this.showHideImg = !this.showHideImg;
    }
    ratingClickProduct(msg:string) : void {
    	this.pageTitle = 'Product Detail: ' + msg;
        //alert(msg);
    }
    onBack(): void {
        this._router.navigate(['/products']);
    }
}