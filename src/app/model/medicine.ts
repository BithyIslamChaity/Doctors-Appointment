export class Medicine {
    name: string;
    strength: string;
    generic: string;
    type: string;
    company: string;    
    sNumber: number;
  
    constructor(
      name: string,
      strength: string,
      generic: string,
      type: string,
      company: string,      
      sNumber: number
    ) {
      this.name = name;
      this.strength = strength;
      this.generic = generic;
      this.type = type;
      this.company = company;      
      this.sNumber = sNumber;
    }
  }