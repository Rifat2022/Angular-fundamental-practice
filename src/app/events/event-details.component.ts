import { Component } from "@angular/core";

@Component({
    selector: 'event-details', 
    templateUrl: './event-details.component.html', 
    styles: [`
        th, td {padding: 10px; font-size: 1em; border: 1px solid black}
        th {font-size: 2em; color: green}
    `], 
})
export class EventDetailsComponent{
    currentCounter: any
    handleClickEvent(value:any){
        this.currentCounter = value;
    }
    events = [
        {name:'Angular Connect', date: '9/26/2036', time: '10am', location: {address: '1 London Rd', city: 'London', country: 'England'}},
        {name:'ng-nl', date: '4/15/2037', time: '9am', location: {address: '127 DT ', city: 'Amsterdam', country: 'NL'}},
        {name:'ng-conf 2037', date: '4/15/2037', time: '9am', location: {address: 'The Palatial America Hotel', city: 'Salt Lake City', country: 'USA'}},
        {name:'UN Angular Summit', date: '6/10/2037', time: '8am', location: {address: 'The UN Angular Center', city: 'New York', country: 'USA'}},
      ]
}
