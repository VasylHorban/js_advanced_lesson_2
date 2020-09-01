class Animal {
    constructor(data){
        this.canMove = true || data.canMove;
        this.name = data.name || this.constructor.name;
        this.price = '$' + data.price ;
        this.species = data.species;
        this.hasWool = data.hasWool || true;
        this.voice = data.voice;
        this.gender = data.gender;
        this.age = data.age;
        this.img = data.img
    }
    voice() {
        return this.voice
    }
}

class Herbivorous extends Animal{
    constructor(data) {
        super(data);
        this.food = 'fruits, vegetables, grass';
        this.isDangerous = data.dangerous || false
    }
}

class Predator extends Animal{
    constructor(data) {
        super(data);
        this.food = 'meat';
        this.isDangerous = data.dangerous || true
    }
}
