// export interface User {
//     id: number;
//     username: string;
//     password: string;
//     email: string;
//     role: string;
//     createdAt: string;
//     firstName?: string;
//   lastName?: string;
//   phoneNumber?: string;

    
//     doctorDept?: string;
//     specialization?: string;
//     doctorDegree?: string;
//     doctorFee?: number;
//     isAvailable?: boolean;
//     licenseNumber?: string;
//     avatarUrl?: string;
//   }


  export enum Role {
  Admin = 'ADMIN',
  Teacher = 'TEACHER',
  Student = 'STUDENT',
}

  // export interface Doctor {
  //   id: number;
  //   username: string;
  //   password: string;
  //   email: string;
  //   role: string;
  //   createdAt: string;
  //   firstName?: string;
  //   lastName?: string;
  //   phoneNumber?: string;
  //   doctorDept?: string;
  //   specialization?: string;
  //   doctorDegree?: string;
  //   doctorFee?: number;
  //   isAvailable?: boolean;
  //   licenseNumber?: string;
  //   avatarUrl?: string;
  // }


  export class User {
  id: number;
    username: string;
    password: string;
    email: string;
    role: string;
    createdAt?: string;
    firstName?: string;
  lastName?: string;
  phoneNumber?: string;

    
    doctorDept?: string;
    specialization?: string;
    doctorDegree?: string;
    doctorFee?: number;
    isAvailable?: boolean;
    licenseNumber?: string;
    avatarUrl?: string;
    

  constructor() {
    this.id = 0;
    this.username = '';
    this.password = '';
    this.email = '';
    this.role = '';
    this.createdAt = '';
    this.firstName = '';
    this.lastName = '';
    this.phoneNumber = '';
    this.doctorDept = '';
    this.specialization = '';
    this.doctorDegree = '';
    this.doctorFee = 0;
    this.isAvailable = false;
    this.licenseNumber = '';
    this.avatarUrl = '';  


  }

}
                                                                     