import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { ProductQuickViewComponent } from './product-quick-view/product-quick-view.component';
import { PopularCategoryComponent } from './popular-category/popular-category.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { TestComponent } from './test/test.component';
import { DragScrollModule } from 'ngx-drag-scroll';
import { CheckoutComponent } from './checkout/checkout.component';
import { TestItemComponent } from './test-item/test-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCategoryComponent,
    ProductQuickViewComponent,
    PopularCategoryComponent,
    ProductItemComponent,
    TestComponent,
    CheckoutComponent,
    TestItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragScrollModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
