import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDoctorPatientComponent } from './create-doctor-patient.component';

describe('CreateDoctorPatientComponent', () => {
  let component: CreateDoctorPatientComponent;
  let fixture: ComponentFixture<CreateDoctorPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateDoctorPatientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDoctorPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
