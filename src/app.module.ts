import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UesrModule } from './uesr/uesr.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [UesrModule, PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
