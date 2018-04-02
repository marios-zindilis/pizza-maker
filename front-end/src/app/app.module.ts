import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";

import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppRoutingModule  } from "./app.routing";
import { AppComponent } from './app.component';
import { ToppingListComponent } from './topping-list/topping-list.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { PizzaDetailComponent } from './pizza-detail/pizza-detail.component';
import { HomeComponent } from './home/home.component';
import { ToppingDetailComponent } from './topping-detail/topping-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ToppingListComponent,
    PizzaListComponent,
    PizzaDetailComponent,
    HomeComponent,
    ToppingDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
