function Scooter (year, color, model) {
   this.year = year
   this.color = color
   this.model = model
}

let flyer = new Scooter('1948', 'Red', 'American Flyer')

function Driver  (name, age, experience ) {
   this.name = name
   this.age = age
   this.experience  = experience
}

let UPS = new Driver('Jackie', '52', 'Very')

function PickupLocation   (address, city ) {
   this.address  = address
   this.city  = city
}

let national = new PickupLocation( '801 E Burdeshaw',  'Dothan')
