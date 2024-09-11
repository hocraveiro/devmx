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
import { EventFormat } from '@devmx/shared-api-interfaces';

@Entity({ name: 'event' })
export class EventEntity implements Event {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: true, default: '' })
  description: string;

  @Column({ type: 'datetime' })
  startDate: Date;

  @Column({ type: 'datetime' })
  endDate: Date;

  @Column({ type: 'simple-array' })
  schedule: string[];

  @Column({
    type: 'enum',
    enum: ['online', 'in-person', 'hybrid'],
    default: 'in-person',
  })
  format: EventFormat;

  @Column({ nullable: true, default: '' })
  cover: string;

  @ManyToMany(() => PresentationEntity)
  @JoinTable()
  presentations: PresentationEntity[];

  @ManyToMany(() => AccountEntity)
  @JoinTable()
  organizers: AccountEntity[];

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
