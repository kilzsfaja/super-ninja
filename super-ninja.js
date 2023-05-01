class Ninja {
  constructor(name, health){
    this.name = name;
    this.health = health;
    this.speed = 3;
    this.strength = 3;
  }
  sayName(){
    console.log(`This goated ninjas name is ${this.name}`);
  }
  showStats(){
    console.log(`Name: ${this.name}, Strength: ${this.strength}, Speed: ${this.speed}, Health: ${this.health}`)
  }
  drinkSake(){
    this.health += 10;
    return this.health;
  }
}

// const ninja1 = new Ninja("Hyabusa");
// ninja1.sayName();
// ninja1.showStats();

// console.log(ninja1)

class Sensei extends Ninja {
  constructor(name){
    super(name);
    this.health = 200;
    this.speed = 10;
    this.strength = 10;
    this.wisdom = 10;
  }
  speakWisdom(){
    super.drinkSake();
    const message = ("The path that leads to what we truly desire is long and difficult, but only by following that path do we achieve our goal.");
    console.log(message)
  }
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"

