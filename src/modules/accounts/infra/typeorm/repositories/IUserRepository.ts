/* eslint-disable import/no-unresolved */
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";

import { User } from "../entities/User";

interface IUserRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
}

export { IUserRepository };
