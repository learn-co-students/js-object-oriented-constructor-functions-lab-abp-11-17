function Scooter (year, color, model) {
  this.year=year;
    this.color=color;
    this.model=model;

}

var Samson = new Scooter (1998, "red", "vespa")

function Driver (name, age, experience){
  this.name=name;
  this.age=age;
  this.experience=experience;
}
var Allison = new Driver ("Allison", "16 years", "2 years")

function PickupLocation (address, city){
  this.address=address;
  this.city=city;
}
var poshHotel = new PickupLocation ("poshHotel", "123 Broadway", "New York City")
