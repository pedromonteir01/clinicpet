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
    if(isAnyInputEmpty()) {
        return sendMsg('Preencha todos os campos', 'error');
    } else if(isURLValida(this.img)){
        return sendMsg("Imagem inválida", "error");
    } else {
        this.petArray.addPet(pet);
    }
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

function isAnyInputEmpty() {
    if (document.getElementById('tutor').value == "" || document.getElementById('pet-name').value == "" || document.getElementById('specie').value == "" || document.getElementById('img-pet').value == "" || document.getElementById('birthdate').value == "") {
        return true;
    } else {
        return false;
    }
}

function cleandFields() {
    document.getElementById('tutor').value = "";
    document.getElementById('pet-name').value = "";
    document.getElementById('specie').value = "";
    document.getElementById('img-pet').value = "";
    document.getElementById('birthdate').value = "";
}

function isURLValida(url) {
    if(url.match(/\.(jpeg|jpg|gif|png)$/) != null){
        return true;
    } else {
        return false;
    }
}

function sendMsg(msg, type) {
    let msgDiv = document.getElementById('register');
    const msgP = `
        <p class="${type}">${msg}</p>
    `

    msgDiv.innerHTML = msgP;
}