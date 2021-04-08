import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HomeModule } from './home/home.module';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';
import { LampsModule } from './lamps/lamps.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'senhanaosegura',
      database: 'postgres',
      entities: ['dist/database/entities/*{.ts,.js}'],
      synchronize: true,
    }),
    HomeModule,
    PostsModule,
    CommentsModule,
    LampsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
