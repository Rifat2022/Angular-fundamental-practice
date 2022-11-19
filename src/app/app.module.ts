import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventAppComponent } from './event-app.component';
import { EventListComponent } from './events/event-list.component';

import { EventService } from './events/event.service';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    EventAppComponent, 
    EventListComponent
    
  ],
  providers: [
   EventService
  ],

  bootstrap: [EventAppComponent]
})
export class AppModule { }
