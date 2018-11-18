import { Component } from '@angular/core';

import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
})
export class RegisterComponent {

    nickname = new FormControl('', [Validators.required]);
    password = new FormControl('', [Validators.required]);
    passwordConfirm = new FormControl('', [Validators.required]);
    email = new FormControl('', [Validators.required, Validators.email]);

    constructor() { }

    getNicknameErrorMessage() {
        return this.nickname.hasError('required') ? 'You must enter a value' :
            this.email.hasError('nickname') ? 'Not a valid nickname' : '';
    }

    getPasswordErrorMessage() {
        return this.password.hasError('required') ? 'You must enter a value' :
            this.password.hasError('password') ? 'Not a valid password' : '';
    }

    getPasswordConfirmErrorMessage() {
        return this.passwordConfirm.hasError('required') ? 'You must enter a value' :
            this.passwordConfirm.hasError('password') ? 'Not a valid password' : '';
    }

    getEmailErrorMessage() {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' : '';
    }

}
