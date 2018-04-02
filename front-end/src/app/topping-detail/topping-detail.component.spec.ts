import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToppingDetailComponent } from './topping-detail.component';

describe('ToppingDetailComponent', () => {
  let component: ToppingDetailComponent;
  let fixture: ComponentFixture<ToppingDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToppingDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToppingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
