import {Component, EventEmitter, Input, Output} from '@angular/core'
@Component({
    selector: 'event-address', 
    template: `
    <span> {{location.address}}, {{location.city}}, {{location.country}}</span>
    <h2>{{counter}}</h2>
    <button class="btn btn-primary" (click)="setDisplayCounter()" >Display counter</button>

    `
})
export class EventAddressComponent{
    @Input() location: any
    @Output() setTimer = new EventEmitter()
    counter = 0
    intervelId: any
    private stopper = false; 
    ngOnInit(){
        this.intervelId = setInterval(()=> this.counter++, 1000)
    }
    setDisplayCounter(){
        this.setTimer.emit(this.counter)
    }
    stopTimer(){
        clearInterval(this.intervelId)
        this.stopper = true
    }
}