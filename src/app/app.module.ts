import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventAppComponent } from './event-app.component';
import { EventAddressComponent } from './events/event-address.component';
import { EventDetailsComponent } from './events/event-details.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    EventAppComponent, 
    EventDetailsComponent, 
    EventAddressComponent
  ],
  providers: [
    
  ],

  bootstrap: [EventAppComponent]
})
export class AppModule { }
