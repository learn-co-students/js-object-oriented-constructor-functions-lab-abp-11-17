function Scooter(year, color, model){
  this.year=year
  this.color=color
  this.model=model
}

let samson = new Scooter(2015,'red','swoosh')

samson.year
samson.color
samson.model

function Driver(name, age, experience){
  this.name=name
  this.age=age
  this.experience=experience
}

let john = new Driver('John', 30, 11+'years')

john.name
john.age
john.experience

function PickupLocation(address, city){
  this.address=address
  this.city=city
}

let fanellis = new PickupLocation(120+'Mercer', 'New York, New York')
