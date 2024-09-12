import { Account } from '@devmx/account-domain';
import {
  Column,
  Entity,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PresentationEntity } from './presentation';
import { PresentationCommentEntity } from './presentation-comment';
import { PresentationReactionEntity } from './presentation-reaction';
import { Role } from '@devmx/shared-api-interfaces';

@Entity({ name: 'account' })
export class AccountEntity implements Account {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true, nullable: false })
  username: string;

  @Column({ nullable: false })
  password: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: '' })
  photo?: string;

  @Column({ default: '' })
  minibio?: string;

  @Column({ default: '' })
  birthday?: string;

  @Column({ type: 'simple-array' })
  roles: Role[];

  @Column({ type: 'boolean', default: false })
  active: boolean;

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
