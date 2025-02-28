import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SumPage } from './sum.page';

describe('SumPage', () => {
  let component: SumPage;
  let fixture: ComponentFixture<SumPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
