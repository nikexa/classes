// 1. შექმენი კლასი Person, რომელსაც ექნება name და age ატრიბუტები. დაამატე მეთოდი introduce(), რომელიც დააბრუნებს ტექსტს:
// Hello, my name is [name] and I am [age] years old.

class Person{
    constructor(name,age){
        this.name=name
        this.age=age
    }

    introduce(){
        console.log(` Hello, my name is ${this.name} and I am ${this.age} years old.`);
        
    }
}

let Person1=new Person("nikoloz","23")
Person1.introduce()


// 2. დაამატე სტატიკური მეთოდი isAdult(age) კლასთან Person, რომელიც დააბრუნებს true თუ ასაკი მეტია ან 
//ტოლია 18-ის და false - წინააღმდეგ შემთხვევაში.
// დავალება: შექმენი ახალი ობიექტი და შეამოწმე ეს სტატიკური მეთოდი.


class Person2 {
  constructor(age) {
    this.age = age;
  }
  static isAdult(age) {
    return age >= 18;
  }
}


let person = new Person2(20);
let isPersonAdult = Person2.isAdult(person.age);
console.log(isPersonAdult);



// 3. კლასების მემკვიდრეობა (Inheritance)
// შექმენი კლასი Animal, რომელსაც ექნება name და მეთოდი speak(). შექმენი შვილობილი კლასი Dog, რომელსაც 
//ექნება მეთოდი speak(), რომელიც დააბრუნებს: [name] says: Woof!

class animal{
    constructor(name){
        this.name=name
    }
    speak(){
        console.log(`${this.name} says: Woof`);
        
    }
}

let dagli=new animal("max")
dagli.speak()



// 4. DOM-ის გამოყენება
// შექმენი კლასი Button, რომელსაც ექნება label და color პარამეტრები კონსტრუქტორში. დაამატე მეთოდი 
//render(containerId), რომელიც შეიქმნის ღილაკს შესაბამისი ფერით და ტექსტით და დაამატებს კონტეინერში.
// დავალება: შექმენი ორი ღილაკი და დაამატე div ელემენტში.

class Button {
  constructor(label, color) {
    this.label = label;
    this.color = color;
  }

  render(containerId) {
    const button = document.createElement('button');
    

    button.textContent = this.label;
    button.style.backgroundColor = this.color;
    button.style.color = 'white'; 

    const container = document.getElementById(containerId);
    container.appendChild(button);
  }
}


const button1 = new Button('Click Me', 'blue');
const button2 = new Button('Submit', 'green');

const container = document.createElement('div');
container.id = 'button-container'; 
document.body.appendChild(container);
button1.render('button-container');
button2.render('button-container');




// 5. შექმენი კლასი Vehicle, რომელსაც ექნება brand და speed ატრიბუტები და მეთოდი describe(). შემდეგ შექმენი 
//Car კლასი, რომელიც მემკვიდრეობით მიიღებს Vehicle-ს და დაამატე თვისება model.
// დავალება: შექმენი რამდენიმე Car ობიექტი და დაიბეჭდე მათი მონაცემები.

class Vehicle {
    constructor(brand, speed) {
      this.brand = brand;  
      this.speed = speed;  
    }
  
    describe() {
      console.log(`${this.brand} dadis ${this.speed} am sichqarit`);
    }
  }
  
  class model extends Vehicle {
    constructor(brand, speed, model) {
      super(brand, speed); 
      this.model = model; 
    }
  
    describe() {
      console.log(`${this.brand} ${this.model} dadis ${this.speed} am sichqarit`);
    }
  }
  
  const car1 = new model('mercedes', 180, 'e63');
  const car2 = new model('bmw', 200, 'm5');
  const car3 = new model('jeep', 240, 'grandcherocke');
  
  car1.describe()  
  car2.describe()  
  car3.describe()  



// 6. შექმენი კლასი Product, რომელსაც ექნება name, price და category ატრიბუტები. დაამატე სტატიკური მეთოდი 
//filterByCategory(products, category), რომელიც გამოიყვანს კონკრეტული კატეგორიის პროდუქტებს.
// დავალება: შექმენი რამდენიმე პროდუქტი და ფილტრაციით აჩვენე მხოლოდ electronics კატეგორიის პროდუქტები.

// Product კლასი
class Product {
  constructor(name, price, category) {
    this.name = name;      // პროდუქტის სახელი
    this.price = price;    // პროდუქტის ფასი
    this.category = category; // პროდუქტის კატეგორია
  }

  // სტატიკური მეთოდი filterByCategory, რომელიც ფილტრავს პროდუქციას კატეგორიით
  static filterByCategory(products, category) {
    return products.filter(product => product.category === category);
  }
}

const product1 = new Product('phone', 1200, 'electronics');
const product2 = new Product('leptop', 800, 'electronics');
const product3 = new Product('maika', 30, 'tansacmeli');



const products = [product1, product2, product3];
const electronicsProducts = Product.filterByCategory(products, 'electronics');
console.log(electronicsProducts);



// 7. შექმენი კლასი Event, რომელსაც ექნება name და date ატრიბუტები. დაამატე მეთოდი isUpcoming(), რომელიც დაადგენს, 
//ღონისძიება მომავალშია თუ არა.
// დავალება: დაამატე რამდენიმე ღონისძიება და შეამოწმე ისინი.

// Event კლასი
class Event {
    constructor(name, date) {
      this.name = name; 
      this.date = new Date(date); 
    }
    isUpcoming() {
      const currentDate = new Date();
      return this.date > currentDate; 
    }
  }
  
  const event1 = new Event('eminem', '2022');
  const event2 = new Event('2pac', '2025');
  const event3 = new Event('50 cwent', '2065');
  
  console.log(`${event1.name} momavalsia? ${event1.isUpcoming()}`); 
  console.log(`${event2.name} momavalsia? ${event2.isUpcoming()}`);
  console.log(`${event3.name} momavalsia? ${event3.isUpcoming()}`); 



// 8. შექმენი კლასი Character, რომელსაც ექნება name და health თვისებები. შექმენი შვილობილი კლასი Warrior,
// რომელსაც დაემატება attack() მეთოდი, რომელიც შეამცირებს health-ს 10-ით.
// დავალება: შექმენი ორი პერსონაჟი და გამოიყენე მათი attack() მეთოდი.

class Character {
    constructor(name, health) {
      this.name = name; 
      this.health = health;
    }
  }
  
  class Warrior extends Character {
    constructor(name, health) {
      super(name, health); 
    }
  
    attack() {
      this.health -= 10;
      console.log(`${this.name} shemoutia,sicocxle ${this.health}`);
    }
  }
  
  const warrior1 = new Warrior('nika', 100);
  const warrior2 = new Warrior('datop', 120);
  

  warrior1.attack()
  warrior2.attack()


// 9. შექმენი კლასი Task, რომელსაც ექნება title, completed და priority ატრიბუტები. დაამატე მეთოდი toggleCompleted(), 
//რომელიც შეცვლის ტასქის სტატუსს (completed).
// დაამატე სტატიკური მეთოდი filterByPriority(tasks, priority), რომელიც დააბრუნებს მხოლოდ იმ ტასქებს,
// რომლებსაც შესაბამისი პრიორიტეტი აქვთ.



// 10. შექმენი კლასი Appointment, რომელსაც ექნება title და date ატრიბუტები. დაამატე მეთოდი date(),
// რომელიც დააბრუნებს true, თუ ღონისძიება დღეს უნდა გაიმართოს და false, წინააღმდეგ შემთხვევაში.



class Appointment {
    constructor(title, date) {
      this.title = title; 
      this.date = new Date(date); 
    }
    Date() {
      const currentDate = new Date();
      return this.date > currentDate; 
    }
  }
  
  let Appointment1 = new Appointment('dimitri vegas', '2024-11-24');
  let Appointment2 = new Appointment('vini vici', '2024-11-25');
  let Appointment3 = new Appointment('marika rosa', '2024-12-01');
  
  console.log(`${Appointment1.title} dgesaa? ${Appointment1.Date()}`);
  console.log(`${Appointment2.title} dgesaa? ${Appointment2.Date()}`);
  console.log(`${Appointment3.title} dgesaa? ${Appointment3.Date()}`);


  