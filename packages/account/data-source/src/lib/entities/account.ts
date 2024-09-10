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

@Entity()
export class AccountEntity implements Account {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @OneToMany(() => PresentationEntity, (presentation) => presentation.account)
  presentations: PresentationEntity[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
