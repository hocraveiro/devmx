import { AccountsController } from './controllers/accounts.controller';
import { PresentationsController } from './controllers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import {
  dataSourceAccountEntities,
  dataSourceAccountProviders,
} from '@devmx/account-data-source';

@Module({
  controllers: [AccountsController, PresentationsController],
  imports: [TypeOrmModule.forFeature(dataSourceAccountEntities)],
  providers: [...dataSourceAccountProviders],
  exports: [],
})
export class AccountResourceModule {}
