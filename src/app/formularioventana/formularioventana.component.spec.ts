import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioventanaComponent } from './formularioventana.component';

describe('FormularioventanaComponent', () => {
  let component: FormularioventanaComponent;
  let fixture: ComponentFixture<FormularioventanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioventanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioventanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
