import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Payment, PaymentService } from '../service/payment.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payment',
  imports: [FormsModule,CommonModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit {
 payments: Payment[] = [];

  payment: Payment = {
    appointmentID: 0,
    amount: 0,
    paymentMethod: 'Cash',
    status: 'UNPAID',
    paidAt: ''
  };
  paymentMethods:string[] = ['Cash', 'Credit Card', 'Debit Card', 'UPI'];
  paymentStatuses:string[] = ['PENDING', 'COMPLETED', 'FAILED'];

  constructor(private paymentService: PaymentService) { }

  ngOnInit(): void {
    this.getAllPayments();
  }

  // Fetch all payments
  getAllPayments(): void {
    this.paymentService.getAllPayments().subscribe({
      next: (data) => {
        this.payments = data;
      },
      error: (err) => {
        console.error('Error fetching payments:', err);
      }
    });
  }

  // Create a new payment
  onSubmit(): void {
    const paymentToCreate: Payment = {
      ...this.payment,
      paidAt: new Date(this.payment.paidAt).toISOString()
    };

    this.paymentService.createPayment(paymentToCreate).subscribe({
      next: () => {
        alert('Payment submitted successfully!');
        this.getAllPayments();  // Refresh the list after creation
        this.resetForm();
      },
      error: (err) => {
        console.error('Error creating payment:', err);
        alert('Payment submission failed.');
      }
    });
  }

  // Delete payment by ID
  deletePayment(id: number): void {
    if (confirm('Are you sure you want to delete this payment?')) {
      this.paymentService.deletePayment(id).subscribe({
        next: () => {
          alert('Payment deleted successfully!');
          this.getAllPayments();  // Refresh the list after deletion
        },
        error: (err) => {
          console.error('Error deleting payment:', err);
          alert('Payment deletion failed.');
        }
      });
    }
  }

  // Reset form after submission
  resetForm(): void {
    this.payment = {
      appointmentID: 0,
      amount: 0,
      paymentMethod: '',
      status: 'PENDING',
      paidAt: ''
    };
  }
}
