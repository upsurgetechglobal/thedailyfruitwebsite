import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HowPage } from './how.page';

describe('HowPage', () => {
  let component: HowPage;
  let fixture: ComponentFixture<HowPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
