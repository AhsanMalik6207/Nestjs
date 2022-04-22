import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from "@nestjs/typeorm"
import { TypeHelpOptions } from "class-transformer";

export default class TypeOrmConfig{
    static getOrmConfig(configService:ConfigService):TypeOrmModuleOptions{
        return {
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'root',
            database: 'quiz',
            entities: [
                __dirname + '/../**/*.entity{.ts,.js}',
            ],
            synchronize: true,

            logging: true,
        }
    }
}

export const typeOrmConfigAsync:TypeOrmModuleAsyncOptions={
      imports: [ConfigModule],
      useFactory:async (configService:ConfigService): 
      Promise<TypeOrmModuleOptions> => TypeOrmConfig.getOrmConfig(configService),
      inject: [ConfigService],
  };