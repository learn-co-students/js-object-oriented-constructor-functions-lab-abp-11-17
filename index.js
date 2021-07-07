function Scooter(year, color, model) {
  this.year = year;
  this.color = color;
  this.model = model;
}
let redScooter = new Scooter(1979, 'red', 'Rover');

function Driver(name, age, experience) {
  this.name = name;
  this.age = age;
  this.experience = experience;
}
function PickupLocation(address, city) {
  this.address = address;
  this.city = city;
}

let newPickUp = new PickupLocation('123 Broadway', 'New York City')
