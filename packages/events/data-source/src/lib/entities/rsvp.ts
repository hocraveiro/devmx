import { RSVPStatus } from '@devmx/shared-api-interfaces';
import { AccountEntity } from '@devmx/account-api';
import { RSVP } from '@devmx/events-domain';
import {
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  ManyToMany,
  OneToMany,
  JoinTable,
} from 'typeorm';
import { EventEntity } from './event';

@Entity()
export class RSVPEntity implements RSVP {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    nullable: false,
    type: 'enum',
    enum: ['confirmed', 'pending', 'declined'],
    default: 'pending',
  })
  status: RSVPStatus;

  @ManyToMany(() => AccountEntity)
  @JoinTable()
  accounts: AccountEntity[];

  @OneToMany(() => EventEntity, (event) => event.rsvp)
  events: EventEntity[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
