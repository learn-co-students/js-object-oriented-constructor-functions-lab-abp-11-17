function Scooter(year, color, model) {
  this.year = year;
  this.color = color;
  this.model = model;
}

function Driver(name, age, experience) {
  this.name = name;
  this.age = age;
  this.experience = experience;
}

function PickupLocation(address, city) {
  this.address = address;
  this.city = city;
}

let scoot = new Scooter(1880,"safron","t");
let drive = new Driver("Rohit", 23, 5);
let pickup = new PickupLocation("sr block 6" ,"pune");
