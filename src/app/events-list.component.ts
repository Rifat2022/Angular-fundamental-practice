import { Component } from '@angular/core'
import { EventService } from './event.service'
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styles: [`
    th, td { font-size: 16px; padding:5px 10px;}
    td a { color: #df691a }
  `]
})
export class EventsListComponent {
    events: any
  constructor(private eventService:EventService, private route: ActivatedRoute) {
    
  }
  ngOnInit() {
    // this.events = this.eventService.getEvents()
    this.events = this.route.snapshot.data['events']
  }
}