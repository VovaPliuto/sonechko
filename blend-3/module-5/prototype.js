// В JavaScript __proto__ та prototype є двома різними речами, які мають різні використання.
// prototype є властивістю функції, яка використовується для створення нових об'єктів за допомогою конструктора. Коли функція використовується як конструктор, вона створює новий об'єкт, який успадковує властивості та методи, що знаходяться у властивості prototype. Це значить, що властивість prototype визначає, які властивості та методи будуть доступні у всіх екземплярах об'єктів, створених за допомогою конструктора.

// Наприклад:

//! javascript

function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const john = new Person('John');
john.greet(); // logs "Hello, my name is John"

// __proto__, з іншого боку, є властивістю кожного об'єкта в JavaScript, яка вказує на прототип, від якого успадковується даний об'єкт. Коли JavaScript знаходить властивість або метод на об'єкті, він спочатку перевіряє власні властивості цього об'єкта, а потім перевіряє властивості прототипу, вказаного у __proto__.

// Наприклад:

//! javascript

const person = {
  name: 'John',
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

const student = {
  __proto__: person,
  major: 'Computer Science',
};

student.greet(); // logs "Hello, my name is John"
console.log(student.major); // logs "Computer Science"

/**
  |============================
  | Отже, prototype використовується для створення нових об'єктів за допомогою конструктора, тоді як __proto__ використовується для успадкування властивостей та методів від інших об'єктів.
  |============================
*/
