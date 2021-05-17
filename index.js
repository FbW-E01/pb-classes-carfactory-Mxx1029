// # Car factory

// Create a constructor function that can be used to create objects.

// The objects your factory creates should all have a "type" propety that always has the value "car".

// The factory should take in three parameters and save them to the created objects:
// - make
// - model
// - year

// Use your function to create 10 different cars. Store all of them inside a "garage" array.

function Car(make, model, year) {
    this.type = "car";
    this.make = make;
    this.model = model;
    this.year = year;
};

const garage = [];

const toyota = new Car("Toyota", "Prius", 2017);
const honda = new Car("Honda", "Pilot", 2019);
const renault = new Car("Renault", "Clio", 2001);
const hyundai = new Car("Hyundai", "Elantra", 2016);
const vw = new Car("Volkswagen", "Passat", 2011);
const bmw = new Car("Audi", "S4", 1993);
const citroen = new Car("Citroen", "Berlingo", 2002);
const cadillac = new Car("Cadillac", "Eldorado Brougham", 1957);
const jeep = new Car("Jeep", "Cherokee", 2013);
const opel = new Car("Opel", "Corsa", 2002);
garage.push(toyota, honda, renault, hyundai, vw, bmw, citroen, cadillac, jeep, opel);

console.log(garage);
























































// 🤖: Nothing to see down here