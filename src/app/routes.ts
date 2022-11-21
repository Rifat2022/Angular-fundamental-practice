import {Routes} from '@angular/router'
import { ErrorComponent } from './404.component'
import { EventDetailsActivator } from './event-details-activator.service'
import { EventDetailsComponent } from './event-details.component'
import { EventListResolver } from './events-list-resolver.service'
import { EventsListComponent } from './events-list.component'
export const appRoute: Routes = [
    
    {path: 'events', component: EventsListComponent, resolve: {events:EventListResolver}},
    {path: 'events/:id' , component: EventDetailsComponent, canActivate: [EventDetailsActivator], canDeactivate: ['canDeactiveEventDetails']}, 
    {path: 'error', component: ErrorComponent},
    {path: '', redirectTo:'events', pathMatch: 'full'},
    
]