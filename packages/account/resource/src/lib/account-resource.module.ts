import { Module } from '@nestjs/common';
import { AccountsController } from './controllers/accounts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceAccountEntities, dataSourceAccountProviders } from '@devmx/account/data-source';

@Module({
  controllers: [AccountsController],
  imports: [TypeOrmModule.forFeature(dataSourceAccountEntities)],
  providers: [...dataSourceAccountProviders],
  exports: [],
})
export class AccountResourceModule {}
