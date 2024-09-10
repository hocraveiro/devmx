import { AccountsController } from './controllers/accounts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import {
  dataSourceAccountEntities,
  dataSourceAccountProviders,
} from '@devmx/account-data-source';
import {
  PresentationsController,
  PresentationLikesController,
  PresentationCommentsController,
} from './controllers';

@Module({
  controllers: [
    AccountsController,
    PresentationsController,
    PresentationLikesController,
    PresentationCommentsController,
  ],
  imports: [TypeOrmModule.forFeature(dataSourceAccountEntities)],
  providers: [...dataSourceAccountProviders],
  exports: [],
})
export class AccountResourceModule {}
