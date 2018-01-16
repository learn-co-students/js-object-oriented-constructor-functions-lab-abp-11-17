//Scooter with `year`, `color`, and `model` properties
function Scooter (year, color, model) {
  this.year = year
  this.color = color
  this.model = model
}

//Driver with `name`, `age`, and `experience` properties
function Driver (name, age, experience) {
  this.name = name
  this.age = age
  this.experience = experience
}

//PickupLocation with `address` and `city` properties
function PickupLocation (address, city) {
  this['address'] = address
  this['city'] = city
}
