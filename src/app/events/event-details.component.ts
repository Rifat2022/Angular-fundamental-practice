import { Component } from "@angular/core";

@Component({
    selector: 'event-details', 
    templateUrl: './event-details.component.html', 
    styles: [`
         .legend span { padding-right:30px; }
    .in-person { color: yellow; }
    .online { color: red; }
    .tbd { color: #335500; }
    .thumbnail { margin-top:10px; padding-top:5px; }
    .label { font-size:14px; margin-bottom:10px; display:inline-block; }
    `], 
})
export class EventDetailsComponent{
    currentCounter: any
    displayDetails:boolean= false; 
    handleClickEvent(value:any){
        this.currentCounter = value;
    }
    toggleDisplay(){
        this.displayDetails = !this.displayDetails
    }
    getEventTitle(event: any){
        if(event.format =='InPerson') 
            return 'in-person'
        else if(event.format =='Online')
            return 'online'
        else
            return 'tbd'

    }
   events = [
        {name:'Angular Connect', date: '9/26/2036', time: '10am', location: {address: '1 London Road ', city: 'London', country: 'England'}, format:"InPerson"},
        {name:'ng-conf 2037', date: '4/15/2037', time: '9am', onlineUrl: 'https://www.ng-conf.org/', format:"Online"},
        {name:'Future Conf (Location/Url TBD)', date: '6/10/2037', time: '8am'},
        {name:'UN Angular Summit', date: '6/10/2037', time: '8am', location: {address: 'The UN Angular Center', city: 'New York', country: 'USA'}, format:"InPerson"}
      ] 
}
