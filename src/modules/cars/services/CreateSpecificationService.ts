import { ISpecificationRepository } from "../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specificationsRepository: ISpecificationRepository) {}
  execute({ name, description }: IRequest): void {
    this.specificationsRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationService };