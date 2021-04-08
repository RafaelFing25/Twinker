import { Module } from '@nestjs/common';
import { HomeService } from './home.service';
import { HomeController } from './home.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from 'src/database/entities/Post';
import { PostsModule } from 'src/posts/posts.module';
import { PostsService } from 'src/posts/posts.service';

@Module({
  imports: [PostsModule],
  providers: [HomeService],
  controllers: [HomeController],
})
export class HomeModule {}
