function Scooter(year, color, model) {
  this.year = year;
  this.color = color;
  this.model = model;
  
  }
  let driverScooter = new Scooter();
  
  function Driver(name, age, experience) {
    this.name = name;
    this.age = age;
    this.experience = experience;
  }
  
  let newDriver = new Driver();
  
  function PickupLocation(adress, city) {
    this.address = adress;
    this.city = city;
  }
  
  let newlocation = new PickupLocation();
  
  