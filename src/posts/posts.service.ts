import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from 'src/database/entities/Post';
import {
  DeleteResult,
  FindManyOptions,
  FindOneOptions,
  Repository,
} from 'typeorm';

interface updatePost {
  content: string;
}

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
  ) {}

  async getAll(): Promise<Post[]> {
    return await this.postsRepository.find();
  }
  async create(post: Post): Promise<Post> {
    const createPost = this.postsRepository.create(post);
    return await this.postsRepository.save(createPost);
  }
  async getById(id: number): Promise<Post> {
    return await this.postsRepository.findOne({ id });
  }
  async get(parameter: FindManyOptions<Post>): Promise<Post[]> {
    return await this.postsRepository.find(parameter);
  }
  async getOne(parameter: FindOneOptions<Post>): Promise<Post> {
    return await this.postsRepository.findOne(parameter);
  }
  async update(id: number, post: updatePost): Promise<Post> {
    const postToUpdate = await this.postsRepository.findOne({ id });
    postToUpdate.content = post.content;
    return await this.postsRepository.save(postToUpdate);
  }
  async delete(id: number): Promise<DeleteResult> {
    return await this.postsRepository.delete(id);
  }
}
