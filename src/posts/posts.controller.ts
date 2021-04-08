import { Body, Controller, HttpCode, Post, Redirect } from '@nestjs/common';
import { Lamp } from 'src/database/entities/Lamp';
import { PostsService } from './posts.service';
import { Post as iPost } from '../database/entities/Post';
import { User } from 'src/database/entities/User';
import { Comment } from '../database/entities/Comment';
interface PostInterface {
  id?: number;
  owner: string;
  content: string;
  lamps?: Lamp[];
  comment?: Comment[];
  created_at?: Date;
}

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}
  @Post()
  @HttpCode(204)
  @Redirect('/')
  async create(@Body() body: PostInterface): Promise<any> {
    const { content } = body;
    const owner: User = {
      id: 100,
      name: 'rafael Finger Lenz',
      email: 'itzgungames@gmail.com',
      password: 'senha',
      biography: 'biografia',
      links: 'links',
    };
    const comments: Comment[] = [];
    const lamps: Lamp[] = [];
    const post: iPost = { owner, content, lamps, comments };
    return await this.postsService.create(post);
  }
}
