import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http } from "@angular/http";

@Component({
  selector: 'app-topping-list',
  templateUrl: './topping-list.component.html',
  styleUrls: ['./topping-list.component.css']
})
export class ToppingListComponent implements OnInit, OnDestroy {
  private request: any
  toppings: [any]

  constructor(
    private http: Http
  ) { }

  ngOnInit() {
    this.request = this.http.get('/api/topping/').subscribe(data=>{
      this.toppings = data.json()
    })
  }

  ngOnDestroy() {
    this.request.unsubscribe()
  }

}
