import {Component} from '@angular/core';
//create a component-selector and template
@Component({
    selector:'ml-app', //in the index.html--should be the same name
    template:`
    	<div class="navbar navbar-default">
    		<ul class="nav navbar-nav">
    			<li>
    				<a [routerLink]="['/welcome']">welcome</a>
    			</li>
    			<li>
    				<a [routerLink]="['/products']">Products</a>
    			</li>
    		</ul>
    	</div>
        <div>
            <h1>{{pageTitle}}</h1> <br />
            <router-outlet></router-outlet>
        </div>
    `
})
//<ml-products></ml-products> without router, replace the line 18

//create a class, export as module, import the component that from angular/core
export class AppComponent{
    //create a variable, no keyword, name : type = value
    pageTitle : string = 'Marlabs Training _ Angular2 _ xuefei';
    
}