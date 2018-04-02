import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http } from "@angular/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  pizzas: [any]
  private request: any
  constructor(private http: Http) { }

  ngOnInit() {
    this.request = this.http.get('/api/pizza/').subscribe(data=>{
      this.pizzas = data.json()
    })
  }

  ngOnDestroy() {
    this.request.unsubscribe()
  }

}
