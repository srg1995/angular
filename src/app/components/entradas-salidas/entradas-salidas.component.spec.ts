import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradasSalidasComponent } from './entradas-salidas.component';

describe('EntradasSalidasComponent', () => {
  let component: EntradasSalidasComponent;
  let fixture: ComponentFixture<EntradasSalidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntradasSalidasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntradasSalidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
