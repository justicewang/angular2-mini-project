import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
	constructor(private _http:Http) {
	}
	getProduct(id:number): Promise<IProduct> {
        return this.getData().then(res => res.find(r => r.productId == id));
    }
	getData() : Promise<IProduct[]> {
		return this._http.get('api/products/products.json').map((response) => <IProduct[]>response.json()).toPromise();
		//return this._http.get('api/products/products.json');
	}
}
