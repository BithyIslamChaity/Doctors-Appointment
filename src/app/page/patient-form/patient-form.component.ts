import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-patient-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './patient-form.component.html',
  styleUrl: './patient-form.component.css'
})
export class PatientFormComponent {
  @Input() patient: any = {};
  @Output() formSubmit = new EventEmitter<void>();
  @Input() confirmPassword: string = '';
  @Output() confirmPasswordChange = new EventEmitter<string>();

  submitForm() {
    if (this.patient.password === this.confirmPassword) {
      this.formSubmit.emit();
    }
  }
}
