import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'
import { ErrorComponent } from './404.component';
import { AppComponent } from './app.component';
import { CreateEventComponent } from './create-event.component';
import { EventDetailsActivator } from './event-details-activator.service';
import { EventDetailsComponent } from './event-details.component';
import { EventService } from './event.service';
import { EventListResolver } from './events-list-resolver.service';
import { EventsListComponent } from './events-list.component';
import { ReactiveFormsModule } from '@angular/forms';


import { appRoute } from './routes';
import { ProjectedContentComponent } from './Projected-content.component';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule, 
    RouterModule.forRoot(appRoute), 
  ],
  declarations: [
    AppComponent,
    EventsListComponent,
    EventDetailsComponent,
    ErrorComponent, 
    CreateEventComponent, 
    ProjectedContentComponent, 
  ],
  providers: [
    EventService,
    EventDetailsActivator,
    {
      provide: 'canDeactiveEventDetails',
      useValue: checkDirtyState
    },
    EventListResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
export function checkDirtyState(component: EventDetailsComponent) {
  if (component.isDirty) {
    return window.confirm("back to events?")
  }
  return true;

}

