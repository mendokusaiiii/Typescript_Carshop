import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import { mockedCar, allCars, carById, updateCar } from '../Mocks/mockCar';

describe('Testa a CarService', function () {
  const service = new CarService();
  afterEach(function () {
    sinon.restore();
  });

  describe('Testa se retorna um status 201 ao criar um carro', function () {
    it('Testa se retorna um status 201 ao criar um carro', async function () {
      sinon.stub(Model, 'create').resolves(carById);
      const result = await service.createOneCar(mockedCar);
      expect(result).to.be.deep.equal(carById);
    });
  });
  
  describe('Testa se retorna um status 200 ao user o metodo GET', function () {
    it('Testa se retorna um status 200 ao procurar um carro', async function () {
      sinon.stub(Model, 'find').resolves(allCars);
      const result = await service.getCars();
      expect(result).to.be.deep.equal(allCars);
    });
  });

  describe('Testa se retorna um status 200 ao procurar um carro por id', function () {
    it(' Testa se retorna um status 200 ao procurar um carro por id', async function () {
      sinon.stub(Model, 'findById').resolves(carById);
      const result = await service.getCarsById('6348513f34c397abcad041b2');
      expect(result).to.be.deep.equal(carById);
    });
    it('Testa se retorna um status 422 ao nao encontrar o carro ', async function () {
      try {
        await service.getCarsById('INVALID ID');
      } catch (error) {
        expect((error as Error).message).to.be.equal('Invalid mongo id');
      }
    });
    it('Testa se retorna um status 404 ao passar informações invalidas', async function () {
      try {
        sinon.stub(Model, 'findById').resolves(null);
        await service.getCarsById('XXXXXXXXXXXXXXXXXXXXXXXX');
      } catch (error) {
        expect((error as Error).message).to.be.equal('Car not found');
      }
    });
  });

  describe('Testa se retorna um status 200 ao fazer um update', function () {
    // it('Testa se retorna um status 200 ao fazer um update', async function () {
    //   const { id } = getUpdateCar;
    //   sinon.stub(Model, 'findByIdAndUpdate').resolves(carById);
    //   const result = await service.updateCarsById(id, updateCar);
    //   expect(result).to.be.deep.equal(carById);
    // });
    it('Testa se retorna um status 422 ao passar informações equivocadas', async function () {
      try {
        await service.updateCarsById('INVALID ID', updateCar);
      } catch (error) {
        expect((error as Error).message).to.be.equal('Invalid mongo id');
      }
    });
    // it('Testa se retorna um status 404 se não encontrar um carro', async function () {
    //   try {
    //     sinon.stub(Model, 'findByIdAndUpdate').resolves(null);
    //     await service.updateCarsById('XXXXXXXXXXXXXXXXXXXXXXXX', updateCar);
    //   } catch (error) {
    //     expect((error as Error).message).to.be.equal('Car not found');
    //   }
    // });
  });
});
