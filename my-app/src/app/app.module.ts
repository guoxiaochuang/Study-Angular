import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Main } from './test/main';
import { Login } from './test/login/login';
import { ProductList } from './test/product-list/product-list';

@NgModule({
  declarations: [
    AppComponent,
    Main,
    Login,
    ProductList
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
