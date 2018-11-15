import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    nickname = new FormControl('', [Validators.required]);
    password = new FormControl('', [Validators.required]);
    email = new FormControl('', [Validators.required, Validators.email]);

    constructor() { }

    ngOnInit() {
    }

    getErrorMessage() {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' : '';
    }

}
