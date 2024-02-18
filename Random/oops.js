function Mafia(name, weapon){
    this.name=name;
    this.weapon=weapon;
}


Mafia.prototype.attack= function(){ // Arrow functions are lexically scoped, 
    //...they see from the current, and function see from where they are being called.
    return 'Attack with ' + this.weapon;
}

class Mafia2{
    constructor(name, weapon){
        this.name=name,
        this.weapon=weapon
    }

    attack(){
        return 'Attack with ' + this.weapon;
    }
}


const sunny=new Mafia('Sunny', 'Dildos'); //constructor function, with a new execution context x.
const sunny2=new Mafia2('Sunny', 'Dildos');
console.log(sunny2.attack())
