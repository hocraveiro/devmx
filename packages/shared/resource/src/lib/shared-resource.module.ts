import { Entity, Type } from '@devmx/shared-api-interfaces';
import { EnvServer, provideEnvServer } from '@devmx/shared-data-source';
import { Module, Global, DynamicModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Global()
@Module({ })
export class SharedResourceModule {
  static forRoot(entities: Type<Entity>[] = [], env: EnvServer): DynamicModule {
    return {
      module: SharedResourceModule,
      imports: [
        TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: env.db.password,
          database: env.db.name,
          entities: [...entities],
          synchronize: true,
          logging: 'all',
          // dropSchema: true
        }),
      ],
      providers: [provideEnvServer(env)],
      exports: [EnvServer],
    };
  }
}
