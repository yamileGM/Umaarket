import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaCardMainPageComponent } from './empresa-card-main-page.component';

describe('EmpresaCardMainPageComponent', () => {
  let component: EmpresaCardMainPageComponent;
  let fixture: ComponentFixture<EmpresaCardMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpresaCardMainPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpresaCardMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
