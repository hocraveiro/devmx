import { dataSourceAccountEntities } from '@devmx/account-data-source';
import { dataSourceEventsEntities } from '@devmx/events-data-source';
import { AccountResourceModule } from '@devmx/account-resource';
import { EventsResourceModule } from '@devmx/events-resource';
import { provideEnvServer } from '@devmx/shared-data-source';
import { SharedResourceModule } from '@devmx/shared-resource';
import { Module } from '@nestjs/common';
import { env } from './envs/env';

@Module({
  imports: [
    SharedResourceModule.forRoot(
      [...dataSourceAccountEntities, ...dataSourceEventsEntities],
      env
    ),
    AccountResourceModule,
    EventsResourceModule,
  ],
  providers: [provideEnvServer(env)],
})
export class AppModule {}
