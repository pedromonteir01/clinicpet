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
        let age = today.getFullYear() - birthdate_.getFullYear();
        let month = today.getMonth() - birthdate_.getMonth();

        if (month < 0 || (month === 0 && today.getDate() < birthdate_.getDate())) {
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
    } else if(!isURLValida(pet.img)){
        return sendMsg("Imagem inválida", "error");
    } else {
        this.petArray.push(pet);
        cleandFields();
        showList();
        sendMsg('Sucesso! Pet cadastrado', 'success')
    }
    }
}

let listPet = new ListPet();

function catchValues() {
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
    document.getElementById('msg').classList.remove('hidden');
    let msgDiv = document.getElementById('msg');
    const msgP = `
        <p class="${type}">${msg}</p>
    `

    msgDiv.innerHTML = msgP;

    setTimeout(function () {
        document.getElementById('msg').classList.add('hidden');
    }, 3000);
}

function showList() {
    let listDiv = document.getElementById('pet-list');
    let listHTML = '';

    listPet.petArray.forEach(pet => {
        listHTML += `
            <div class="card-pet">
            <img src="${pet.img}" alt="${pet.name}-photo">
            <div id="format-card">
            <strong><p>Nome do pet:</p></strong> <span>${pet.name}</span>
            <strong><p>Espécie:</p></strong> <span>${pet.specie}</span>
            <strong><p>Idade:</p></strong> <span>${pet.age}</span>
            <strong><p>Tutor:</p></strong> <span>${pet.tutor}</span>
            </div>
            </div>
        `;
    });
    listDiv.innerHTML = listHTML;
}

function showPets() {
    if(listPet.petArray.length == 0) {
        sendMsg('adicione um pet!', 'error')
    } else {
        document.getElementById('main-field').classList.add('hidden');
        document.getElementById('artc_list').classList.remove('hidden');
        document.getElementById('text_h2').classList.add('hidden');
    }
}

function showRegister() {
    document.getElementById('main-field').classList.remove('hidden');
    document.getElementById('artc_list').classList.add('hidden');
    document.getElementById('text_h2').classList.remove('hidden');
}

