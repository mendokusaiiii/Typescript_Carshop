import IMotorcycles from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

class Motorcycles extends Vehicle {
  private category: 'Street' | 'Custom' | 'Trail';
  private engineCapacity: number;

  constructor(motor: IMotorcycles) {
    super(motor);
    this.category = motor.category;
    this.engineCapacity = motor.engineCapacity;
  }
}

export default Motorcycles;
