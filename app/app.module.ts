import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { StarComponent } from './shared/start.component';
import { ProductComponent } from './products/product-list.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { ProductPipe } from './products/product-filter-pipe';
import { RouterModule } from '@angular/router';
import {WelcomeComponent } from './home/welcome.component';

@NgModule({
  imports: [ 
  	BrowserModule,
  	FormsModule,
  	HttpModule,
    RouterModule.forRoot([
      {path:'products',component:ProductComponent},
      {path:'product/:id',component:ProductDetailComponent},
      {path:'welcome',component:WelcomeComponent},
      {path:'',redirectTo:'welcome', pathMatch:'full'},  // default path
      {path:'**',redirectTo:'products', pathMatch:'full'}  // error path
    ])
  ],
  declarations: [ 
  	AppComponent,
  	ProductComponent,
  	ProductPipe,
    StarComponent,
    WelcomeComponent,
    ProductDetailComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }