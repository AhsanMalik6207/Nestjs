import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from "@nestjs/typeorm"
import { TypeHelpOptions } from "class-transformer";

export default class TypeOrmConfig{
    static getOrmConfig(configService:ConfigService):TypeOrmModuleOptions{
        return {
            type: 'postgres',
            host: configService.get("DB_HOST"),
            port: configService.get("DB_PORT"),
            username: 'postgres',
            password: 'root',
            database: configService.get("DB_NAME"),
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