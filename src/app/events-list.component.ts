import {Component} from "@angular/core"
import { EventService } from "./event.service";
@Component ({
    selector: 'events-list', 
    templateUrl: './events-list.component.html', 
    styles: [`
        th, td { font-size: 16px; padding:5px 10px; border: 1px solid yellow; }
    `]
})
export class EventsListComponent {
    constructor(private eventService: EventService){

    }
    events = this.eventService.getEvents();
}