//will create and work with class here.
class Person{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  greet(){
    console.log(`Hey! My name is ${this.name} and I am here.`);
  }
}

//will inherit properties from parent class Person.
class Man extends Person{
  constructor(name, age, gender){
    super(name, age); //acknowledge the parent class constructor first.
    this.gender = gender;
  }
  //override parent class method by redeclaring it.
  greet(){
    console.log(`Hey! I am ${this.gender} and I am dope.`)
  }
}

//class with static method.
//Such class can be used without having to instatiate object.
class Death{
  static canDie(){
    console.log('Everyone can and will die');
  }
}

export {Person, Man, Death};
