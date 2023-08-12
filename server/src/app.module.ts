import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { FileModule } from './file/file.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path' 

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static')
    }),
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb+srv://dilmuroddelitot:dima6611@cluster0.5xa7rf2.mongodb.net/'),
    TrackModule,
    FileModule
  ]
})
export class AppModule {}

// dilmuroddelitot
// VPBOq606CYl8NSQG
