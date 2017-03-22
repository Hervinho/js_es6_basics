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

export {Person, Man};
