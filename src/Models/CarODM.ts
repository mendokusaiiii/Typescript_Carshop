import { Schema, UpdateQuery } from 'mongoose';
import AbstractODM from './AbstractODM';
import ICar from '../Interfaces/ICar';

class CarODM extends AbstractODM<ICar> {
  constructor() {
    const schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    super(schema, 'Car');
  }

  public async find(): Promise<ICar[]> {
    return this.model.find();
  }

  public async findById(id: string): Promise<ICar | null> {
    return this.model.findById(id);
  }

  public async updateCarsById(id: string, obj: ICar): Promise<ICar | null> {
    return this.model.findByIdAndUpdate(
      { _id: id },
      { ...obj } as UpdateQuery<ICar>,
      { new: true },
    );
  }
}

export default CarODM;
