import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEquiposComponent } from './formulario-equipos.component';

describe('FormularioEquiposComponent', () => {
  let component: FormularioEquiposComponent;
  let fixture: ComponentFixture<FormularioEquiposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioEquiposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioEquiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
