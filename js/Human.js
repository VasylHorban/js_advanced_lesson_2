class Human {
    constructor(data){
        this.name = data.name;
        this.surname = data.surname;
        this.canWolk = true || data.canWolk;
        this.canSpeak = true || data.canSpeak;
        this.weight = data.weight + 'kg';
        this.skinColor = data.skinColor;
        this.birthday = data.birthday;
        this.nationality = data.nationality;
        this.img = data.img
    }
    getFullName(){
        return this.name + " " + this.surname;
    }
    getAge(){
        
    }
    sayHi(){
        return `Hi my name is ${this.name}.`
    }
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
    }
    getDuties(){
       return this.duties.join(' and ');
    }
    sayHi(){
        return super.sayHi() + `I am a ${this.profession}` 
    }
    
}
