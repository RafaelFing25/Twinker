import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Post } from './Post';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  biography: string;

  @Column()
  links: string;

  @OneToMany(() => Post, (post) => post.owner, {
    cascade: ['insert', 'remove'],
  })
  @JoinColumn()
  posts?: Post[];

  @Column()
  created_at?: string;
}
