import {Routes} from '@angular/router'
import { EventDetailsActivator } from './event-details-activator.service'
import { EventDetailsComponent } from './event-details.component'
import { EventsListComponent } from './events-list.component'
export const appRoute: Routes = [
    
    {path: 'events', component: EventsListComponent}, 
    {path: 'events/:id' , component: EventDetailsComponent, canActivate: [EventDetailsActivator]}, 
    {path: '', redirectTo:'events', pathMatch: 'full'}, 
    
]