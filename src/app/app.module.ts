import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { router } from "./app.routes";

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { GuidesComponent } from './pages/guides/guides.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    PricingComponent,
    GuidesComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    router
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
