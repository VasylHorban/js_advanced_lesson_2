class Human {
    constructor(data){
        this.name = data.name;
        this.surname = data.surname;
        this.canWolk = true || data.canWolk;
        this.canSpeak = true || data.canSpeak;
        this.weight = data.weight + 'kg';
        this.skinColor = data.skinColor;
        this.nationality = data.nationality;
        this.img = data.img;
        this.workTime;

    }
    getFullName(){
        return this.name + " " + this.surname;
    }
    startDoing(type, animal){
        return `Start ${this.getDuties()} ${animal}`
    }
    endDoing(){
        return `My work is done!`
    }
    sayHi(){
        return `Hi my name is ${this.name}.`
    }
    getDuties(){}

}

class Man extends Human{
    constructor(data){
        super(data);
        this.gender = 'Man';
        this.canDoHardWork = true
    }
}

class Woman extends Human{
    constructor(data){
        super(data);
        this.gender = 'Woman';
        this.canDoHardWork = false
    }
}

class Worker extends Man{
    constructor(data){
        super(data)
        this.duties = ['to feed animals', 'to clean open-air cages']
        this.profession = 'worker'
        this.workTime = 9000
    }
    getDuties(){
       return this.duties.join(' and ');
    }
    sayHi(){
        return super.sayHi() + `I am a ${this.profession}` 
    }
    
}

class Hunter extends Man{
    constructor(data){
        super(data)
        this.duties = ['to catch animals']
        this.profession = 'hunter'
        this.workTime = 11000
    }
    getDuties(){
       return this.duties.join(' and ');
    }
    sayHi(){
        return super.sayHi() + `I am a ${this.profession}` 
    }
    
}

class Nurse extends Woman{
    constructor(data){
        super(data)
        this.duties = ['to vet animals']
        this.profession = 'nurse'
        this.workTime = 10000
    }
    getDuties(){
       return this.duties.join(' and ');
    }
    sayHi(){
        return super.sayHi() + `I am a ${this.profession}` 
    }
    
}

class Librarian extends Woman{
    constructor(data){
        super(data)
        this.duties = ['keep an archive']
        this.profession = 'librarian'
        this.workTime = 7000
    }
    getDuties(){
       return this.duties.join(' and ');
    }
    sayHi(){
        return super.sayHi() + `I am a ${this.profession}` 
    }
    
}
