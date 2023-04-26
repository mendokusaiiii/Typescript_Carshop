import Motorcycles from '../Domains/Motorcycle';
import IMotorcycles from '../Interfaces/IMotorcycle';
import MotorcyclesODM from '../Models/MotorcyclesODM';

class MotorcyclesService {
  private createMotorcyclesDomain(veh: IMotorcycles | null): Motorcycles | null {
    if (veh) return new Motorcycles(veh);
    return null;
  }

  public async createOneMotorcycle(moto: IMotorcycles) {
    const motorcyclesODM = new MotorcyclesODM();
    const newMoto = await motorcyclesODM.create(moto);
    return this.createMotorcyclesDomain(newMoto);
  }
}

export default MotorcyclesService;
