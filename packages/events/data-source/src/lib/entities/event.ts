import { AccountEntity, PresentationEntity } from '@devmx/account-api';
import { Event } from '@devmx/events-domain';
import {
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  ManyToOne,
} from 'typeorm';
import { RSVPEntity } from './rsvp';

@Entity()
export class EventEntity implements Event {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @ManyToMany(() => PresentationEntity)
  @JoinTable()
  presentations: PresentationEntity[];

  @ManyToMany(() => AccountEntity)
  @JoinTable()
  attendees: AccountEntity[];

  @ManyToOne(() => RSVPEntity, (rsvp) => rsvp.events)
  rsvp: RSVPEntity;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
