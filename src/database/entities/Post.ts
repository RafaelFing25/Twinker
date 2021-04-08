import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Lamp } from './Lamp';
import { User } from './User';
import { Comment } from './Comment';

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn('increment')
  id?: number;

  @ManyToOne(() => User, (user) => user.posts)
  @JoinColumn()
  owner: User;

  @Column()
  content: string;

  @OneToMany(() => Lamp, (Lamp) => Lamp.post, {
    cascade: ['insert', 'update', 'remove'],
  })
  @JoinColumn({ name: 'lamps' })
  lamps: Lamp[];

  @OneToMany(() => Comment, (comment) => comment.post, {
    cascade: ['insert', 'update', 'remove'],
  })
  comments?: Comment[];
}
