import { AccountEntity } from './account';
import { PresentationCommentEntity } from './presentation-comment';
import { PresentationLikeEntity } from './presentation-like';
import { Presentation } from '@devmx/account-domain';
import {
  Column,
  Entity,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';

@Entity()
export class PresentationEntity implements Presentation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @ManyToOne(() => AccountEntity, (account) => account.presentations)
  account: AccountEntity;

  @OneToMany(() => PresentationCommentEntity, (comment) => comment.presentation)
  comments: PresentationCommentEntity[];

  @OneToMany(() => PresentationLikeEntity, (like) => like.presentation)
  likes: PresentationLikeEntity[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
