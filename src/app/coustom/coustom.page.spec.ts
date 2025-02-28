import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoustomPage } from './coustom.page';

describe('CoustomPage', () => {
  let component: CoustomPage;
  let fixture: ComponentFixture<CoustomPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CoustomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
