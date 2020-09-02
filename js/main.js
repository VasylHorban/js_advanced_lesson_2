//humans DECORATOR 
const workAtZoo = (function () {
    let name = 'Lviv Zoo';

    function showWorkPlace() {
        return `I am working at ${this.hired}`
    }

    function add(person) {
        person.hired = name;
        person.showWorkPlace = showWorkPlace;
        return person;
    }
    return {
        add: add
    }
})();

//animals DECORATOR 
const zooProperty = (function () {
    let name = 'Lviv Zoo';

    function add(animal) {
        animal.isOwnedBy = name;
        return animal;
    }
    return {
        add: add
    }
})();

//humans FUCTORY
const humanFuctory = (function () {
    let obj;
    let list = {
        hunter: function () {
            return new Hunter(obj)
        },
        worker: function () {
            return new Worker(obj)
        },
        nurse: function () {
            return new Nurse(obj)
        },
        librarian: function () {
            return new Librarian(obj)
        },
        human: function () {
            return new Human(obj)
        }
    }

    function create(key, data, setEmploy) {
        let result;
        obj = data
        if (!setEmploy) {
            result = list[key](obj)
        } else {
            result = workAtZoo.add(list[key](obj))
        }

        return result
    }
    return {
        create: create
    }
})();

// animals Fuctory
const animalFuctory = (function () {
    let obj;
    let list = {
        herbivorous: function () {
            return new Herbivorous(obj)
        },
        predator: function () {
            return new Predator(obj)
        }
    }

    function create(key, data, setOwner) {
        let result;
        obj = data;
        if (!setOwner) {
            result = list[key](obj)
        } else {
            result = zooProperty.add(list[key](obj))
        }
        return result
    }
    return {
        create: create
    }
})();

const zooWorkers = [
    humanFuctory.create('worker', {
        name: 'Taras',
        skinColor: 'white',
        surname: 'Syrota',
        weight: 87,
        birthday: '1994.01.23',
        nationality: 'ukrainian',
        img: 'https://image.flaticon.com/icons/svg/607/607419.svg'
    }, true),
    humanFuctory.create('hunter', {
        name: 'Ivan',
        skinColor: 'white',
        surname: 'Ivanenko',
        weight: 84,
        birthday: '1991.07.09',
        nationality: 'ukrainian',
        img: 'https://image.flaticon.com/icons/svg/2922/2922510.svg'
    }, true),
    humanFuctory.create('nurse', {
        name: 'Olena',
        skinColor: 'white',
        surname: 'Zhuk',
        weight: 61,
        birthday: '1992.10.19',
        nationality: 'ukrainian',
        img: 'https://image.flaticon.com/icons/svg/122/122454.svg'
    }, true),
    humanFuctory.create('librarian', {
        name: 'Catherine',
        skinColor: 'white',
        surname: 'Sahaidachna',
        weight: 61,
        birthday: '1992.10.19',
        nationality: 'ukrainian',
        img: 'https://image.flaticon.com/icons/svg/2922/2922561.svg'
    }, true)
]

const zooAnimals = [
    animalFuctory.create('herbivorous', {
        price: 11000,
        species: 'Elephant',
        voice: 'ffFFfff',
        gender: 'man',
        age: 26,
        img: 'https://image.flaticon.com/icons/svg/2646/2646372.svg'
    }, true),
    animalFuctory.create('herbivorous', {
        price: 5000,
        species: 'monkey',
        voice: 'uuuAaa',
        gender: 'woman',
        age: 9,
        img: 'https://image.flaticon.com/icons/svg/616/616433.svg'
    }, true),
    animalFuctory.create('predator', {
        price: 8800,
        species: 'lion',
        voice: 'rrrRRrr',
        gender: 'man',
        age: 14,
        img: 'https://image.flaticon.com/icons/svg/2395/2395815.svg'
    }, true),
    animalFuctory.create('predator', {
        price: 8800,
        species: 'cobra',
        voice: 'sssss',
        gender: 'woman',
        age: 11,
        img: 'https://image.flaticon.com/icons/svg/616/616487.svg'
    }, true),
]

const HTMLoutput = (function () {
    let domAnimalNames;
    let domHumanNames;
    let domHumanProfession;
    let domAnimalImg;
    let domHumanImg;
    let domAnimal;
    let data;

    function setData(arr) {
        data = arr;
        getHTML();
        hoverEvent()
    }

    function getHTML() {
        domAnimal = document.querySelectorAll('.animal')
        domAnimalNames = document.querySelectorAll('.animal-name')
        domHumanNames = document.querySelectorAll('.human-name')
        domHumanProfession = document.querySelectorAll('.human-profession')
        domAnimalImg = document.querySelectorAll('.animal-img')
        domHumanImg = document.querySelectorAll('.human-img')

    }

    function hoverEvent() {
        document.querySelector('.animal-container').addEventListener('mouseover', e => {
            //          if(e.target.getAttribute('data-animal')){
            //            console.log(data[0][e.target.getAttribute('data-animal')].voice)
            //          }
            if (e.target.classList.contains('animal')) {
                //                console.log(data[0][e.target.getAttribute('data-animal')].voice)
                showModalWindow(data[0][e.target.getAttribute('data-animal')].voice, e.target)
            }
        })
    }

    function showModalWindow(text, elem) {
        console.log(text, elem.querySelector('.modal-window'))
        elem.querySelector('.modal-window').style.display = 'block';
        elem.querySelector('.modal-window').textContent = text + '...';
    }

    function fillHTML() {
        data[0].forEach((elem, i) => {
            domAnimalNames[i].textContent = elem.species;
            domAnimalImg[i].src = elem.img;
            domAnimal[i].setAttribute('data-animal', i);
        })
        data[1].forEach((elem, i) => {
            domHumanNames[i].textContent = elem.name;
            domHumanProfession[i].textContent = elem.profession;
            domHumanImg[i].src = elem.img
        })
    }
    return {
        setData: setData,
        fillHTML: fillHTML
    }
})();


HTMLoutput.setData([zooAnimals, zooWorkers])
HTMLoutput.fillHTML();
