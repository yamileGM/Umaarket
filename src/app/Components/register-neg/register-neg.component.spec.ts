import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterNegComponent } from './register-neg.component';

describe('RegisterNegComponent', () => {
  let component: RegisterNegComponent;
  let fixture: ComponentFixture<RegisterNegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterNegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterNegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
