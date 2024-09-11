import { dataSourceAccountEntities } from '@devmx/account-data-source';
import { dataSourceEventsEntities } from '@devmx/events-data-source';
import { AccountResourceModule } from '@devmx/account-resource';
import { EventsResourceModule } from '@devmx/events-resource';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { env } from './envs/env';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: env.db.password,
      database: env.db.name,
      entities: [...dataSourceAccountEntities, ...dataSourceEventsEntities],
      synchronize: true,
      logging: 'all',
      // dropSchema: true
    }),
    AccountResourceModule,
    EventsResourceModule,
  ]
})
export class AppModule {}
