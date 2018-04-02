import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Http } from "@angular/http";

@Component({
  selector: 'app-topping-detail',
  templateUrl: './topping-detail.component.html',
  styleUrls: ['./topping-detail.component.css']
})
export class ToppingDetailComponent implements OnInit {
  private routeSubscription: any
  private request: any
  private id: string
  topping: any

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: Http
  ) { }

  ngOnInit() {
    this.routeSubscription = this.activatedRoute.params.subscribe(params=>{
      this.id = params['id']
    })
    this.request = this.http.get('/api/topping/' + this.id + '/').subscribe(data=>{
      this.topping = data.json()
    })
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe()
    this.request.unsubscribe()
  }

}
