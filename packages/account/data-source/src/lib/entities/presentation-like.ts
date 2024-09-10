import { PresentationLike } from '@devmx/account-domain';
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
export class PresentationLikeEntity implements PresentationLike {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @ManyToOne(() => PresentationEntity, (presentation) => presentation.likes)
  presentation: PresentationEntity;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
