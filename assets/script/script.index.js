//class pet
class Pet {
    constructor(tutor, name, specie, img, birthdate) {
        this.tutor = tutor;
        this.name = name;
        this.specie= specie;
        this.img = img;
        this.birthdate = birthdate;
        this.age = this.getAge(birthdate);
    }
    
    //get age
    getAge(birthdate) {

    }
}

//list pet class
class ListPet {
    constructor() {
        this.petArray = [];
    }

    addPet(pet) {
    //verifications

    }
}