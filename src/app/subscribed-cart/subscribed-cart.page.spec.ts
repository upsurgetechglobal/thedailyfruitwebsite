import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubscribedCartPage } from './subscribed-cart.page';

describe('SubscribedCartPage', () => {
  let component: SubscribedCartPage;
  let fixture: ComponentFixture<SubscribedCartPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SubscribedCartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
