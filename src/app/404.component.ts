import {Component} from '@angular/core'
@Component({
    selector: 'error',
    template:`
        <div>
            <h2>404 Page Not Found</h2>
            <button class="btn btn-primary" [routerLink]="['']"> Back to Events </button>
        </div>
    `
})
export class ErrorComponent{

}
