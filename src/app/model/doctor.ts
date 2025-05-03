export class Doctor {
    id: number;
    name: string;
    email: string;
    phone: string;
    address: string;
    specialty: string;
    yearsOfExperience: number;
  
    constructor(id: number, name: string, email: string, phone: string, address: string, specialty: string, yearsOfExperience: number) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.phone = phone;
      this.address = address;
      this.specialty = specialty;
      this.yearsOfExperience = yearsOfExperience;
    }
  }
  