import Motorcycles from '../Domains/Motorcycle';
import IMotorcycles from '../Interfaces/IMotorcycle';
import MotorcyclesODM from '../Models/MotorcyclesODM';
import Handler from '../Utils/Handler';

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

  public async getAllMotorcycles() {
    const motorcyclesODM = new MotorcyclesODM();
    const getMotorcycles = await motorcyclesODM.find();
    return getMotorcycles.map((moto) => this.createMotorcyclesDomain(moto));
  }

  public async getMotorcyclesById(id: string) {
    if (id.length !== 24) {
      throw new Handler(422, 'Invalid mongo id');
    }
    const motorcyclesODM = new MotorcyclesODM();
    const motoById = await motorcyclesODM.findById(id);
    return this.createMotorcyclesDomain(motoById);
  }
}

export default MotorcyclesService;
