import { Injectable, Inject } from "@nestjs/common";
import { NestUsers as User } from "./nests.entity";

@Injectable()
export class UserService {
  constructor(
    @Inject("USER_REPOSITORY")
    private userRepository: typeof User
  ) {}

  async findAllUser(params): Promise<any> {
    const {page, name ,age} = params;
    const limit = 6;
    const offset = (page-1)*6;
    const where: any ={};
    if (name) {
      where.name = name;
    }
    if (age) {
      where.age = age;
    }
    const res = await this.userRepository.findAll<User>({
        attributes: ["id", "name", "age", "avatar"],
        offset,
        where,
        limit
    });
    const total = await this.userRepository.count();
    return {total, userList: res, page};
  }

  async createUser(param): Promise<User> {
    const res = await this.userRepository.create<User>(param);
    return res;
  }
  async getUserById(id) {
    const res = await this.userRepository.findOne<User>({
        where: {
            id
        }
    });
    return res;
  }
  async updateUser(params) {
    const id = params.id;
    delete params.id;
    const res = await this.userRepository.update<User>({...params}, {where: {id}});
    return res;
  }

  async deleteUser(params) {
    const id = params.id;
    delete params.id;
    const res = await this.userRepository.destroy<User>({where: {id}});
    return res;
  }
}