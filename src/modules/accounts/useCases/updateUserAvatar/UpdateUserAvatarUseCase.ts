/* eslint-disable import/no-unresolved */
import { inject, injectable } from "tsyringe";

import { IUserRepository } from "@modules/accounts/infra/typeorm/repositories/IUserRepository";

import { deleteFile } from "../../../../utils/file";

interface IRequest {
  user_id: string;
  avatar_file: string;
}

// Adicionar coluna avatar na tabela de users
// Refatorarusuario com coluna avatar
// Configuração upload multer
// Criar regra de negócio do upload
// Criar controller
@injectable()
class UpdateUserAvatarUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUserRepository
  ) {}
  async execute({ user_id, avatar_file }: IRequest): Promise<void> {
    const user = await this.usersRepository.findById(user_id);

    if (user.avatar) {
      await deleteFile(user.avatar);
    }
    user.avatar = avatar_file;

    await this.usersRepository.create(user);
  }
}

export { UpdateUserAvatarUseCase };
