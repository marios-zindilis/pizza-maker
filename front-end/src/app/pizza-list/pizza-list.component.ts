import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http } from "@angular/http";

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit, OnDestroy {
  private request: any
  title: string = "Pizza List"
  pizzas: [any]
  constructor(private http: Http) { }

  ngOnInit() {
    this.request = this.http.get('/api/pizza/').subscribe(data=>{
      console.log(data.json())
      this.pizzas = data.json() as [any]
    })
  }

  ngOnDestroy() {
    this.request.unsubscribe()
  }

}
