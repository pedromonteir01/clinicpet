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
        let today = new Date();
        let birthdate_ = new Date(this.birthdate);
        let age = today.getFullYear() - birthdate.getFullYear();
        let month = today.getMonth() - birthdate.getMonth();

        if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
            age--;
        }

        return age < 0 ? 0 : age;
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
        this.petArray.push(pet);
        cleandFields();
        showList();
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

function showList() {
    let listDiv = document.getElementById('pet-list');
    let listHTML = '';

    listPet.petArray.forEach(pet => {
        listHTML += `
            <img src="${pet.img}" alt="${pet.name}-photo">
            <strong><p>Nome do pet:</p></strong> <span>${pet.name}</span>
            <strong><p>Espécie:</p></strong> <span>${pet.specie}</span>
            <strong><p>Idade:</p></strong> <span>${pet.age}</span>
            <strong><p>Tutor:</p></strong> <span>${pet.tutor}</span>
        `
    });
    listDiv.innerHTML = listHTML;
}

function showPets() {
    document.getElementById('main-field').classList.add('hidden');
    document.getElementById('artc_list').classList.remove('hidden');
}

