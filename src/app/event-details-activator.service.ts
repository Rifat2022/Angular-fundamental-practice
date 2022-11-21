import { Injectable } from "@angular/core";
import { EventService } from "./event.service";
import {Router, CanActivate, ActivatedRouteSnapshot} from '@angular/router'

@Injectable()
export class EventDetailsActivator implements CanActivate {
    constructor(private eventService: EventService, private router: Router){}
    canActivate(route: ActivatedRouteSnapshot) {
        let event = this.eventService.getEvent(+route.params['id'])
        return !!event
    }
}