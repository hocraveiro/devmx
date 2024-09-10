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

@Entity()
export class PresentationCommentEntity implements PresentationComment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @ManyToOne(() => PresentationEntity, (presentation) => presentation.comments)
  presentation: PresentationEntity;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
