class HospitalEmployee {
    constructor(name) {
      this._name = name;
      this._remainingVacationDays = 20;
    }
    
    get name() {
      return this._name;
    }
    
    get remainingVacationDays() {
      return this._remainingVacationDays;
    }
    
    takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff;
    }
  
    static generatePassword() {
      const randomNumber = Math.floor(Math.random()*10000);
      return randomNumber;
    }
  }
  
  class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
      super(name);
      this._certifications = certifications;
    } 
    
    get certifications() {
      return this._certifications;
    }
    
    addCertification(newCertification) {
      this.certifications.push(newCertification);
    }
  }
  
  
  class Doctor extends HospitalEmployee {
    constructor(name, insurance) {
      super(name);
      this._insurance = insurance;
    }
    get insurance() {
      return this._insurance;
    }
  }
  
  const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
  nurseOlynyk.takeVacationDays(5);
  console.log(nurseOlynyk.remainingVacationDays);
  nurseOlynyk.addCertification('Genetics');
  console.log(nurseOlynyk.certifications);
  
  // const carlosDoutor = new Doctor('Carlos', 'Geral');
  // console.log(carlosDoutor.name);
  // console.log(carlosDoutor.insurance)
  // console.log(carlosDoutor.remainingVacationDays);
  // carlosDoutor.takeVacationDays(4);
  // console.log(carlosDoutor.remainingVacationDays);