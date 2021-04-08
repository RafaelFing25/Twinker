import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from 'src/database/entities/Comment';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentsRepository: Repository<Comment>,
  ) {}
  async create(comment: Comment): Promise<Comment> {
    return await this.commentsRepository.save(comment);
  }
  async delete(id: number): Promise<DeleteResult> {
    return await this.commentsRepository.delete(id);
  }
}
