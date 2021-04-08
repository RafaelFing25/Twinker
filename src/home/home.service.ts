import { Inject, Injectable } from '@nestjs/common';
import { Post } from 'src/database/entities/Post';
import { PostsService } from '../posts/posts.service';

@Injectable()
export class HomeService {
  constructor(private readonly postService: PostsService) {}
  async getAll(): Promise<Post[]> {
    return await this.postService.getAll();
  }
}
