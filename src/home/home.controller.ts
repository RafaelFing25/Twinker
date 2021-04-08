import { Controller, Get, Render } from '@nestjs/common';
import { Post } from 'src/database/entities/Post';
import { HomeService } from './home.service';

interface PostReturn {
  posts: Post[];
}

@Controller()
export class HomeController {
  constructor(private readonly homeService: HomeService) {}
  @Get()
  @Render('index')
  async home(): Promise<PostReturn> {
    const posts: Post[] = await this.homeService.getAll();
    console.log(posts);
    return { posts };
  }
}
