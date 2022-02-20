/* eslint-disable import/no-unresolved */
import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory
    );
  });

  it("Should be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Audi A3",
      description: "Audi Sport",
      daily_rate: 440.0,
      license_plate: "AAA-4321",
      fine_amount: 100,
      brand: "Audi",
      category_id: "qualquer_id",
    });

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("Should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Sandero RS",
      description: "Renault Sport",
      daily_rate: 440.0,
      license_plate: "AAA-1234",
      fine_amount: 100,
      brand: "Renault",
      category_id: "qualquer_id",
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: "Renault",
    });
    expect(cars).toEqual([car]);
  });

  it("Should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Sandero RS",
      description: "Renault Sport",
      daily_rate: 440.0,
      license_plate: "AAA-1234",
      fine_amount: 100,
      brand: "Renault",
      category_id: "qualquer_id",
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: "Sandero RS",
    });
    expect(cars).toEqual([car]);
  });

  it("Should be able to list all available cars by category", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Sandero RS",
      description: "Renault Sport",
      daily_rate: 440.0,
      license_plate: "AAA-1234",
      fine_amount: 100,
      brand: "Renault",
      category_id: "qualquer_id",
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: "qaulquer_id",
    });
    expect(cars).toEqual([car]);
  });
});
