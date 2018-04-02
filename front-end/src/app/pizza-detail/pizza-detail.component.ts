import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Http } from "@angular/http";

@Component({
  selector: 'app-pizza-detail',
  templateUrl: './pizza-detail.component.html',
  styleUrls: ['./pizza-detail.component.css']
})
export class PizzaDetailComponent implements OnInit {
  private routeSubscription: any
  private request: any
  private id: string
  pizza: any

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: Http
  ) { }

  ngOnInit() {
    this.routeSubscription = this.activatedRoute.params.subscribe(params=>{
      this.id = params['id']
    })
    this.request = this.http.get('/api/pizza/' + this.id + '/').subscribe(data=>{
      this.pizza = data.json() as any
    })
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe()
    this.request.unsubscribe()
  }

}
