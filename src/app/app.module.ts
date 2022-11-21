import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventAppComponent } from './event-app.component';
import { EventService } from './event.service';
import { EventsListComponent } from './events-list.component';
import {RouterModule} from '@angular/router'
import { appRoutes } from './routes';

@NgModule({
  imports: [
    BrowserModule, 
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventAppComponent, 
    EventsListComponent

  ],
  providers: [
   EventService
  ],

  bootstrap: [EventAppComponent]
})
export class AppModule { }
