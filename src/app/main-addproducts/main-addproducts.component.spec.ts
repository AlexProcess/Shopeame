import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAddproductsComponent } from './main-addproducts.component';

describe('MainAddproductsComponent', () => {
  let component: MainAddproductsComponent;
  let fixture: ComponentFixture<MainAddproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainAddproductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainAddproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
