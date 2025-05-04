export class Patient {
    id: number;
    name: string;
    email: string;
    age: number;
    medicalHistory: string;
  
    constructor(id: number, name: string, email: string, age: number, medicalHistory: string) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.age = age;
      this.medicalHistory = medicalHistory;
    }
  }