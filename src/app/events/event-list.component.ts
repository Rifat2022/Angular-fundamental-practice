import {Component} from '@angular/core'
import { EventService } from './event.service';
@Component({
    selector: 'event-list', 
    templateUrl: './event-list.component.html', 
    styles: [`
        th, td{ 
            padding: 10px; 
            border: 1px solid yellow; 
        }
    `]
})
export class EventListComponent{
    events: any
    constructor(private eventService: EventService){

    }
    ngOnInit(){
        this.events = this.eventService.getEvents()
    }
}