import {Routes} from '@angular/router'
import { EventDetailsComponent } from './event-details.component'
import { EventsListComponent } from './events-list.component'
export const appRoute: Routes = [
    {path: '', component: EventsListComponent}, 
    {path: 'events/:id' , component: EventDetailsComponent}
]