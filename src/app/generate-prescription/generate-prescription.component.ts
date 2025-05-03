import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-generate-prescription',
  templateUrl: './generate-prescription.component.html',
  styleUrls: ['./generate-prescription.component.css']
})
export class GeneratePrescriptionComponent {
  prescriptionId: string = '123456';
  patientName: string = 'John Doe';
  doctorId: string = 'D78910';
  medicineName: string = 'Napa500';
  dosage: string = 'Morning before meal';
  duration: string = '10 days';
  investigation1: string = 'CBC';
  investigation2: string = 'USG of PP';
  advice: string = 'Walking 30 minutes daily';
  followUpDate: string = '30/10/25';

  constructor() { }

  ngOnInit(): void { }
}
