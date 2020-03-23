import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { SliderComponent } from './slider/slider.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AboutComponent } from './about/about.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { ServiceComponent } from './service/service.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    SliderComponent,
    ProductListComponent,
    AboutComponent,
    ProductAddComponent,
    NotFoundComponent,
    HomeComponent,
    ProductManagerComponent,
    ServiceComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
