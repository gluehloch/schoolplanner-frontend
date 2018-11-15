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

    constructor() { }

    ngOnInit() {
    }

    getNicknameErrorMessage() {
        return this.nickname.hasError('required')
            ? 'You must enter a value'
            : '';
    }

    getPasswordErrorMessage() {
        return this.password.hasError('required')
            ? 'You must enter a value'
            : '';
    }

}
