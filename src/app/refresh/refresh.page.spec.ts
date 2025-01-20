import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RefreshPage } from './refresh.page';

describe('RefreshPage', () => {
  let component: RefreshPage;
  let fixture: ComponentFixture<RefreshPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RefreshPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
