import { PresentationReaction } from '@devmx/account-domain';
import { ReactionType } from '@devmx/shared-api-interfaces';
import { PresentationEntity } from './presentation';
import {
  Column,
  Entity,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AccountEntity } from './account';

@Entity({ name: 'presentation-reaction' })
export class PresentationReactionEntity implements PresentationReaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    nullable: false,
    type: 'enum',
    enum: [
      'claps',
      'mindblowing',
      'insightful',
      'amazing',
      'interesting',
      'learnedSomething',
      'like',
    ],
    default: 'claps',
  })
  type: ReactionType;

  @ManyToOne(() => PresentationEntity, (presentation) => presentation.reactions)
  presentation: PresentationEntity;

  @ManyToOne(() => AccountEntity, (account) => account.reactions, {
    eager: true,
  })
  account: AccountEntity;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
