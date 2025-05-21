export interface User {
  id: number; // Assuming the ID is a number (if it's a Long in Java, it corresponds to a number in TypeScript)
  email: string;
  role: string; // Define the Role type if it's not already defined
  address: string;
  firstName: string;
  lastName: string;
  doctorDept: string;
  specialization: string;
  doctorDegree: string;
  doctorFee: string;
  phoneNumber: string;
  gender: string;
  age: number;
  createdAt: string; // Use string to represent LocalDateTime (ISO 8601 string format)
  updatedAt: string; // Same for updatedAt
}