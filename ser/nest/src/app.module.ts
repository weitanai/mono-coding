import { Module } from "@nestjs/common";
import { AppController} from "./app.controller";
import { AppService } from "./app.service";
import {databaseProviders} from "./datebase.providers";
import {UserModule} from "./user/user.module";
@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService, ...databaseProviders],
  exports: [...databaseProviders],
})
export class AppModule {}
