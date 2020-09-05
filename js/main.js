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
        species: 'elephant',
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
            if (e.target.getAttribute('data-animal')) {
                let text = data[0][e.target.getAttribute('data-animal')].getVoice()
                let mw = e.target.parentElement.nextElementSibling;
                showModalWindow(text, mw)
            }
        })
        document.querySelector('.human-container').addEventListener('mouseover', e => {
            if (e.target.getAttribute('data-human')) {
                let text = data[1][e.target.getAttribute('data-human')].sayHi()
                let mw = e.target.parentElement.nextElementSibling;

                showModalWindow(text, mw)
            }
        })
    }

    function findMW(text, index, key) {
        let elem;
        if (key == 'human') {
            for (let img of domHumanImg) {
                if (img.getAttribute('data-human') == index) elem = img
            }
        } else if (key == 'animal') {
            for (let img of domAnimalImg) {
                if (img.getAttribute('data-animal') == index) elem = img
            }
        }
        elem = elem.parentElement.nextElementSibling;
        showModalWindow(text, elem)
    }

    function showModalWindow(text, elem) {
        elem.style.display = 'block';
        elem.textContent = text + '...';
        setTimeout(() => {
            hideModalWindow(elem)
        }, 3000)
    }

    function hideModalWindow(elem) {
        elem.style.display = 'none'
    }

    function fillHTML() {
        data[0].forEach((elem, i) => {
            domAnimalNames[i].textContent = elem.species;
            domAnimalImg[i].src = elem.img;
            domAnimalImg[i].setAttribute('data-animal', i);
        })
        data[1].forEach((elem, i) => {
            domHumanNames[i].textContent = elem.name;
            domHumanProfession[i].textContent = elem.profession;
            domHumanImg[i].src = elem.img;
            domHumanImg[i].setAttribute('data-human', i);

        })
    }
    return {
        findMW: findMW,
        setData: setData,
        fillHTML: fillHTML
    }
})();

//MEDIATOR//
class ZooMediator {
    constructor() {
        this.workers;
        this.animals;
    }
    register(animals, workers) {
        this.workers = workers;
        this.animals = animals;
    }
    setHTML() {
        HTMLoutput.setData([this.animals, this.workers])
        HTMLoutput.fillHTML();
    }
    resolveProblem(type, animal) {
        let problemTypes = {
            isIll: 'nurse',
            isEscape: 'hunter',
            isHungry: 'worker',
            archiveProblem: 'librarian'
        }
        let workPerson;
        let i;
        this.workers.forEach((person, index) => {
            if (person.profession == problemTypes[type]) {
                let text = person.startDoing(type, animal);
                workPerson = person
                i = index
                HTMLoutput.findMW(text, index, 'human')

            }
        })
        setTimeout(() => {
            let text = workPerson.endDoing()
            HTMLoutput.findMW(text, i, 'human')
            this.animals.forEach((a, index) => {
                if (a.species == animal) {
                    let text = a.getVoice()
                    HTMLoutput.findMW(text, index, 'animal')
                }
            })
        }, workPerson.workTime)
    }
}


const zooMediator = new ZooMediator();
zooMediator.register(zooAnimals, zooWorkers)
zooMediator.setHTML();
zooSimulator();

//simulates random behavior in a zoo, just for example
function zooSimulator() {
    let animalSpecies = zooAnimals.map(a => a.species)
    console.log(animalSpecies)
    let problemsKey = ['isIll', 'isEscape', 'isHungry', 'archiveProblem']
    function randomInt(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        console.log(rand)
        return Math.floor(rand);
    }
    setInterval(()=>{
        zooMediator.resolveProblem(problemsKey[randomInt(0, 3)], animalSpecies[randomInt(0,3)])}
                ,5000)
}
