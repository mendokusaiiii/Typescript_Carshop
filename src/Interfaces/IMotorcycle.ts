export default interface IMotorcycles {
  id?: string;
  model: string;
  year: number;
  color: string;
  status?: boolean;
  buyValue: number;
  category: 'Street' | 'Custom' | 'Trail';
  engineCapacity: number;
}
