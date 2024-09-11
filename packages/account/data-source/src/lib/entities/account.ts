import { Account } from '@devmx/account-domain';
import {
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { PresentationEntity } from './presentation';
import { PresentationCommentEntity } from './presentation-comment';
import { PresentationReactionEntity } from './presentation-reaction';

@Entity({ name: 'account' })
export class AccountEntity implements Account {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @OneToMany(() => PresentationEntity, (presentation) => presentation.account)
  presentations: PresentationEntity[];

  @OneToMany(() => PresentationCommentEntity, (comment) => comment.account)
  comments: PresentationCommentEntity[];

  @OneToMany(() => PresentationReactionEntity, (comment) => comment.account)
  reactions: PresentationReactionEntity[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
