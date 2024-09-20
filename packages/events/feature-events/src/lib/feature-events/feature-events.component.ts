import { AfterViewInit, Component, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { EventFacade } from '@devmx/events-data-access';

@Component({
  selector: 'lib-feature-events',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatTableModule, MatToolbarModule, MatPaginatorModule],
  templateUrl: './feature-events.component.html',
  styleUrl: './feature-events.component.css',
})
export class FeatureEventsComponent {
  displayedColumns: string[] = ['id', 'name', 'startDate', 'endDate'];
  dataSource = new MatTableDataSource<EventListTable>(ELEMENT_DATA);
  router = inject(Router);

  eventFacade = inject(EventFacade);

  currentDate = new Date();

  // @ViewChild(MatPaginator) paginator: MatPaginator;
  onClickNew() {
    console.log('novo')
    this.router.navigateByUrl('/events/new');
  }
  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }

}



interface EventListTable {
  id: string;

  name: string;

  description?: string;

  startDate: Date;

  endDate: Date;

}


const ELEMENT_DATA: EventListTable[] = [
  {
    "id": "string",
    "name": "16º meetup TypeScript",
    "description": "",
    "startDate": new Date(),
    "endDate": new Date()
  }
];