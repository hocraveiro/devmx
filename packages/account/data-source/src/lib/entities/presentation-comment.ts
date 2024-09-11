import { PresentationComment } from '@devmx/account-domain';
import {
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
import { PresentationEntity } from './presentation';
import { AccountEntity } from './account';

@Entity({ name: 'presentation-comment' })
export class PresentationCommentEntity implements PresentationComment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  message: string;

  @ManyToOne(
    () => PresentationEntity,
    (presentation) => presentation.comments,
    { eager: true }
  )
  presentation: PresentationEntity;

  @ManyToOne(() => AccountEntity, (account) => account.comments, {
    eager: true,
  })
  account: AccountEntity;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
