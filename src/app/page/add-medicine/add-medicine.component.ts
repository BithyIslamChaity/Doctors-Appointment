import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Medicine } from '../../model/medicine';


@Component({
  selector: 'app-add-medicine',
  imports: [FormsModule],
  templateUrl: './add-medicine.component.html',
  styleUrl: './add-medicine.component.css'
})
export class AddMedicineComponent {

  p: Medicine = new Medicine('', '-mg', '','' , '', 0); // Initialize with default values
  isUpdate = false;

  constructor(private router: Router) {
    // Check if medicine data is passed for editing
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras?.state?.['medicine']) {
      this.p = nav.extras.state['medicine'];
      this.isUpdate = true;
    }
  }

  ngOnInit(): void {
    console.log('Add-Med-Component initialized!!');
  }

  onSubmit(): void {
    // Retrieve medicines from localStorage
    let medicines: Medicine[] = JSON.parse(localStorage.getItem('medicine') || '[]');

    if (this.isUpdate) {
      // Update the medicine if sNumber matches
      medicines = medicines.map((medicine) => 
        medicine.sNumber === this.p.sNumber ? this.p : medicine
      );
    } else {
      // Add a new medicine to the array
      this.p.sNumber = Date.now(); // Assign a unique ID using timestamp
      medicines.push(this.p);
    }

    // Save the updated list of medicines back to localStorage
    localStorage.setItem('medicine', JSON.stringify(medicines));

    // Reset the form
    this.p = new Medicine('', '-mg', '','' , '', 0);

    // Navigate to the table page
    this.router.navigate(['/all-med']);
  }
}