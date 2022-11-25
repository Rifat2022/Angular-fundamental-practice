import { Component } from "@angular/core";
@Component({
    selector: 'projected-content', 
    template:`
        <div class="projectedContent pointable" (click)="toggleContent()" style="
        padding-top: 20px; cursor: pointer; display: flex; justify content: center; text-aligh: center " >
            Create New Event
            <ng-content *ngIf="visible"></ng-content>
        </div>
    `
})
export class ProjectedContentComponent{
    visible: boolean = false; 
    toggleContent(){
        this.visible = !this.visible; 
    }
}