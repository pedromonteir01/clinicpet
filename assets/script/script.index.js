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

let listPet = new ListPet();

function catchValue() {
    let tutor = document.getElementById('tutor').value;
    let name = document.getElementById('pet-name').value;
    let specie = document.getElementById('specie').value;
    let img_pet = document.getElementById('img-pet').value;
    let birthdate = document.getElementById('birthdate').value;

    let pet = new Pet(tutor, name, specie, img_pet, birthdate);

    listPet.addPet(pet);
}