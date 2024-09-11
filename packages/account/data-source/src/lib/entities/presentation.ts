import { PresentationFormat } from '@devmx/shared-api-interfaces';
import { PresentationCommentEntity } from './presentation-comment';
import { PresentationReactionEntity } from './presentation-reaction';
import { Presentation } from '@devmx/account-domain';
import { AccountEntity } from './account';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'presentation' })
export class PresentationEntity implements Presentation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  title: string;

  @Column()
  description: string;

  @Column({
    type: 'enum',
    enum: ['talk', 'workshop', 'webinar'],
    default: 'talk',
  })
  format: PresentationFormat;

  @Column('simple-array')
  tags: string[];

  @Column('simple-array')
  resources: string[];

  @ManyToOne(() => AccountEntity, (account) => account.presentations, {
    eager: true,
  })
  account: AccountEntity;

  @OneToMany(() => PresentationCommentEntity, (comment) => comment.presentation)
  comments: PresentationCommentEntity[];

  @OneToMany(() => PresentationReactionEntity, (like) => like.presentation, {
    eager: true,
  })
  reactions: PresentationReactionEntity[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
