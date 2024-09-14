import { AuthGuard, JwtAuthGuard, RolesGuard } from '@devmx/shared-resource';
import { MulterModule } from '@nestjs/platform-express';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Global, Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import {
  provideJwtServiceImpl,
  dataSourceAccountEntities,
  dataSourceAccountProviders,
} from '@devmx/account-data-source';
import {
  AuthController,
  AccountsController,
  PresentationsController,
} from './controllers';

@Global()
@Module({
  controllers: [AuthController, AccountsController, PresentationsController],
  imports: [
    PassportModule,
    JwtModule.register({
      global: true,
      signOptions: { expiresIn: '3600s' },
    }),
    TypeOrmModule.forFeature(dataSourceAccountEntities),
    MulterModule.register({
      dest: './assets',
    }),
  ],
  providers: [
    provideJwtServiceImpl(JwtService),
    ...dataSourceAccountProviders,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
  exports: [],
})
export class AccountResourceModule {}
