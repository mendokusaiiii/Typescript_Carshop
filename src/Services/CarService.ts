import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import Handler from '../Utils/Handler';

class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async createOneCar(car:ICar) {
    const carODM = new CarODM();
    const newCar = await carODM.create(car);
    return this.createCarDomain(newCar);
  }
  
  public async getCars() {
    const carODM = new CarODM();
    const getAllCars = await carODM.find();
    return getAllCars.map((car) => this.createCarDomain(car));
  }

  public async getCarsById(id: string) {
    if (id.length !== 24) {
      throw new Handler(422, 'Invalid mongo id');
    }
    
    const carODM = new CarODM();
    const findCarById = await carODM.findById(id);
    return this.createCarDomain(findCarById);
  }

  public async updateCarsById(id: string, body: ICar) {
    const updateCar = await this.getCarsById(id);
    if (!updateCar) {
      throw new Handler(404, 'Car not found');
    }
    if (id.length !== 24) {
      throw new Handler(422, 'Invalid mongo id');
    }

    const carODM = new CarODM();
    const updateCarId = await carODM.updateCarsById(id, body);
    return this.createCarDomain(updateCarId);
  }
}

export default CarService;
