import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { EventDetailsComponent } from './event-details.component';
import { EventService } from './event.service';
import { EventsListComponent } from './events-list.component';

import { appRoute } from './routes';


@NgModule({
  imports: [ 
    BrowserModule,
    RouterModule.forRoot(appRoute)
  ],
  declarations: [
   AppComponent, 
  EventsListComponent,
   EventDetailsComponent
  ],
  providers: [ EventService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}

