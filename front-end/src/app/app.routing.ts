import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PizzaDetailComponent } from "./pizza-detail/pizza-detail.component";
import { ToppingListComponent } from "./topping-list/topping-list.component";
import { PizzaListComponent } from "./pizza-list/pizza-list.component";
import { ToppingDetailComponent } from "./topping-detail/topping-detail.component";
import { HomeComponent } from "./home/home.component";

const appRoutes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "pizza",
        component: PizzaListComponent
    },
    {
        path: "pizza/:id",
        component: PizzaDetailComponent
    },
    {
        path: "topping",
        component: ToppingListComponent
    },
    {
        path: "topping/:id",
        component: ToppingDetailComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}