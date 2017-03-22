//will create and work with class here.
class Person{
  constructor(name, gender){
    this.name = name;
    this.gender = gender;
  }
  greet(){
    console.log(`Hey! My name is ${this.name} and I am here.`);
  }
}

export {Person};
