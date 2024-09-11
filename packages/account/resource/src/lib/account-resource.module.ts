import {
  AuthController,
  AccountsController,
  PresentationsController,
} from './controllers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { Global, Module } from '@nestjs/common';
import {
  provideJwtServiceImpl,
  dataSourceAccountEntities,
  dataSourceAccountProviders,
} from '@devmx/account-data-source';

@Global()
@Module({
  controllers: [AuthController, AccountsController, PresentationsController],
  imports: [
    JwtModule.register({
      global: true,
      signOptions: { expiresIn: '3600s' },
    }),
    TypeOrmModule.forFeature(dataSourceAccountEntities),
  ],
  providers: [provideJwtServiceImpl(JwtService), ...dataSourceAccountProviders],
  exports: [],
})
export class AccountResourceModule {}
