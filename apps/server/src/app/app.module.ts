import { dataSourceAccountEntities } from '@devmx/account/data-source';
import { AccountResourceModule } from '@devmx/account/resource';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { env } from '../envs/env';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: env.db.password,
      database: env.db.name,
      entities: [...dataSourceAccountEntities],
      synchronize: true,
      logging: 'all',
    }),
    AccountResourceModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
