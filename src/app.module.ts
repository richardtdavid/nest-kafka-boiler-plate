import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigService, ConfigModule } from '@nestjs/config'
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm'
import { KafkaModule } from './kafka/kafka.module'
import { formatBrokerlist } from './utils'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    KafkaModule.register({
      clientId: <string>new ConfigService().get('CLIENT_ID'),
      brokers: formatBrokerlist(<string>new ConfigService().get('HOST')),
      groupId: <string>new ConfigService().get('GROUP_ID')
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const options: TypeOrmModuleOptions = {
          type: 'postgres',
          host: configService.get('DB_HOST'),
          port: configService.get("DB_PORT"),
          username: configService.get("DB_USERNAME"),
          password: configService.get("DB_PASSWORD"),
          database: configService.get("DB_NAME"),
          synchronize: false,
          logging: 'all',
          autoLoadEntities: true,
        };
        return options
      },
      inject: [ConfigService]
    }),
    TypeOrmModule.forFeature([]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
