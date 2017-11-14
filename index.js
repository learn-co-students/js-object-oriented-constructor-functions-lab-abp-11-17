function Scooter(year, color, model) {
  this.year = year;
  this.color = color;
  this.model = model;
}

new Scooter(2010, "yellow", "crappy");

function Driver(name, age, experience) {
  this.name = name;
  this.age = age;
  this.experience = experience;
}

new Driver("Bob", 43, 4);

function PickupLocation(address, city) {
  this.address = address;
  this.city = city;
}

new PickupLocation("1234 Acorn Lane", "Hollywood");
