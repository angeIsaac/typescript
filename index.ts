interface Vehicle {
    make: string;
    model: string;
    year: number;
    start(): void;
  }
  
  class Car implements Vehicle {
    make: string;
    model: string;
    year: number;
  
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    start(): void {
      console.log("Le moteur de la voiture a démarré");
    }
  }
  
  const myCar = new Car("Toyota", "Corolla", 2020);
  myCar.start();
  