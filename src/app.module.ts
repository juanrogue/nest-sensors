import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { SensorModule } from './sensor/sensor.module';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5432,
    //   username: 'adsensors',
    //   password: '!pw1234!',
    //   database: 'sensors-db',
    //   entities: [],
    //   synchronize: true,
    // }),
    ConfigModule.forRoot({ isGlobal: true }),
    SensorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
