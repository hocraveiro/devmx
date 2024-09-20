import {
    Page,
    FindWhere,
    FindOptions,
  } from '@devmx/shared-api-interfaces';
  import { Observable } from 'rxjs';
  import { Event } from '../entities';
  
  export abstract class EventService {
    abstract find(options: FindOptions<Event>): Observable<Page<Event>>;
  
    abstract findOne(options: FindWhere<Event>): Observable<Event | null>;
  }
  