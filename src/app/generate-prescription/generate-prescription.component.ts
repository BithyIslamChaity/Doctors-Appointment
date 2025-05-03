import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-generate-prescription',
  templateUrl: './generate-prescription.component.html',
  styleUrls: ['./generate-prescription.component.css']
})
export class GeneratePrescriptionComponent {
  prescriptionId: string = '';
  patientName: string = '';
  doctorId: string = '';
  medicineName: string = '';
  dosage: string = '';
  duration: string = '';
  investigation1: string = '';
  investigation2: string = '';
  advice: string = 'Daily spoken English 45 second after sleep ';
  followUpDate: string = '30/10/25';

  constructor() { }

  ngOnInit(): void { }

  
}
