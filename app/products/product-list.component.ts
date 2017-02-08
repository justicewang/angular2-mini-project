import {Component,OnInit} from '@angular/core';
import {IProduct} from './product';
import {ProductService} from './product-service';
@Component({
    selector:'ml-products',
    templateUrl:'app/products/product-list.component.html',
    styles : ['thead{color:#FF000;}','thead{backgroud-color:red;}'],
    providers : [ProductService]
})

export class ProductComponent implements OnInit{
	pageTitle : string  = 'XUEFEI products';
	products : IProduct[];
    imgWidth : number = 40;
    showHideImg : boolean = false;
    constructor(private _productService : ProductService) {
        //this.products = _productService.getData();
        _productService.getData().then(product_response => this.products = product_response);
    }
    filterVal : string = '';
    toggleImg() : void {
	   //alert('click show img');
	   this.showHideImg = !this.showHideImg;
    };
    ngOnInit() : void {
        console.log('OnInit method called');
        //this._productService.getProductV2();
    }
    ratingClickProduct(msg:string) : void {
        alert(msg);
    }
}