var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.start = function () {
        console.log("Le moteur de la voiture a démarré");
    };
    return Car;
}());
var myCar = new Car("Toyota", "Corolla", 2020);
myCar.start();
