import { Schema } from 'mongoose';
import AbstractODM from './AbstractODM';
import IMotorcycles from '../Interfaces/IMotorcycle';

class MotorcyclesODM extends AbstractODM<IMotorcycles> {
  constructor() {
    const schema = new Schema<IMotorcycles>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });

    super(schema, 'Motorcycle');
  }

  public async find(): Promise<IMotorcycles[]> {
    return this.model.find();
  }

  public async findById(id: string): Promise<IMotorcycles | null> {
    return this.model.findById(id);
  }
}

export default MotorcyclesODM;
