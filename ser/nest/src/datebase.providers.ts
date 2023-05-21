import { Sequelize } from 'sequelize-typescript';
import { NestUsers } from './user/nests.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        username: 'root',
        password: '987346',
        database: 'first',
      });
      sequelize.addModels([NestUsers]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
