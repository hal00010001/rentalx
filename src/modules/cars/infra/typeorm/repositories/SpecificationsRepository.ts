/* eslint-disable import/no-unresolved */
import { getRepository, Repository } from "typeorm";

import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from "@modules/cars/repositories/ISpecificationsRepository";

import { Specification } from "../entities/Specification";

class SpecificationsRepository implements ISpecificationRepository {
  // private specifications: Specification[];

  private repository: Repository<Specification>;

  constructor() {
    // this.specifications = [];
    this.repository = getRepository(Specification);
  }

  async create({
    name,
    description,
  }: ICreateSpecificationDTO): Promise<Specification> {
    // const specification = new Specification();
    // Object.assign(specification, {
    //   name,
    //   description,
    //   created_at: new Date(),
    // });
    // await this.specifications.push(specification);
    const specification = this.repository.create({
      name,
      description,
    });
    await this.repository.save(specification);

    return specification;
  }

  async findByName(name: string): Promise<Specification> {
    // const specification = this.specifications.find(
    //   (specification) => specification.name === name
    // );
    const specification = await this.repository.findOne({
      name,
    });
    return specification;
  }

  async findByIds(ids: string[]): Promise<Specification[]> {
    const specifications = await this.repository.findByIds(ids);
    return specifications;
  }
}

export { SpecificationsRepository };
