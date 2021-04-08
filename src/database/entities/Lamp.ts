import { Post } from './Post';
import {
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './User';

@Entity()
export class Lamp {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @ManyToOne(() => Post, (post) => post.lamps)
  @JoinColumn({ name: 'post' })
  post: Post;
}
