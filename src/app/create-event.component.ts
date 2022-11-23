import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { EventService } from "./event.service";

@Component({
    selector: 'create-event',
    templateUrl: './create-event.component.html',
    styles: [`
        form { margin-top: 10px; }
        label { display: block; }
        .form-group { margin-top: 5px; }
    `]
})
export class CreateEventComponent {
    name: string = ''
    date: string = ''
    time: string = ''
    address: string = ''
    city: string = ''
    country: string = ''

    constructor(
        private eventService: EventService,
        private router: Router,
    ) { }

    saveEvent(event: any) {
        this.eventService.setEvent(event)
        this.router.navigate(['/events'])
    }

    cancel() {
        this.router.navigate(['/events'])
    }
}

