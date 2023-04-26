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
}

export default MotorcyclesODM;
