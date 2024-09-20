import {
    Page,
    FindWhere,
    FindOptions,
    Updatable,
  } from '@devmx/shared-api-interfaces';
  import { EnvClient, HttpClient } from '@devmx/shared-data-access';
  import { Event,  EventService} from '@devmx/events-domain';
  
  export class EventServiceImpl implements EventService {
    constructor(
      private readonly httpClient: HttpClient,
      private readonly env: EnvClient
    ) {}
  
    find(options: FindOptions<Event>) {
      const api = `${this.env.api}/events`;
      const where = Object.entries(options.where ?? {});
      const page = Object.entries(options.page);
      const params = new URLSearchParams(...page, ...where);
      const url = `${api}?${params.toString()}`;
      return this.httpClient.get<Page<Event>>(url, { params });
    }
  
    findOne(where: FindWhere<Event>) {
      const api = `${this.env.api}/events/${where.id}`;
      const properties = Object.entries(where ?? {}) as [string, string][];
      const params = new URLSearchParams(properties);
      return this.httpClient.get<Event>(`${api}?${params.toString()}`);
    }
  
    update(value: Updatable<Event>) {
      const url = `${this.env.api}/events/${value.id}`;
      return this.httpClient.patch<Event>(url, value);
    }
  }
  