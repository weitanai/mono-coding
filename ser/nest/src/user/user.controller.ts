import { Controller, Get, Post, Req, Query, Redirect, Param, Body, HttpException, HttpStatus } from "@nestjs/common";
import {UserService} from "./user.service";

@Controller("api")
export class UserController {
  constructor(private readonly userService: UserService) {}
  
  

  @Get("getUser")
  async getUserById(@Query() query): Promise<any> {
    const {id} = query;
    return  await this.userService.getUserById(id);
  }

  @Post("user/createUser")
  async createUser(@Body() params: UserProps): Promise<any> {
    console.log("---add", params);
    return  await this.userService.createUser(params);
  }
  @Post("user/modify")
  async updateUser(@Body() params: UserProps): Promise<any> {
    return  await this.userService.updateUser(params);
  }

  @Post("getUserList")
  async getUser(@Body() params): Promise<any> {
    return  await this.userService.findAllUser(params);
  }

  @Post("user/delete")
  async deleteUser(@Body() params): Promise<any> {
    return  await this.userService.deleteUser(params);
  }
}


interface UserProps {
  name: string;
  age: number;
  avatar: string;
}
