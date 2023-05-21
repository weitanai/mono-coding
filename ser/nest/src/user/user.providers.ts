import {NestUsers} from './nests.entity';

export const userProviders = [
    {
        provide: 'USER_REPOSITORY',
        useValue: NestUsers
    }
]