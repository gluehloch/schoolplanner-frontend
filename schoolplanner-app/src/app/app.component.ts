import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'schoolplanner-app';
    model = {
        left: true,
        middle: false,
        right: false
    };
}
