import { Component } from '@angular/core';

import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
})
export class RegisterComponent {

    private readonly MSG_REQUIRED = 'You must enter a value';
    private readonly MSG_INVALID_PASSWORD = 'Not a valid password';
    private readonly MSG_INVLID_EMAIL = 'Not a valid email';
    private readonly MSG_INVALID_NICKNAME = 'Not a valid nickname';
    private readonly MSG_EMPTY = '';

    nickname = new FormControl('', [Validators.required]);
    password = new FormControl('', [Validators.required]);
    passwordConfirm = new FormControl('', [Validators.required]);
    email = new FormControl('', [Validators.required, Validators.email]);

    constructor() { }

    getNicknameErrorMessage() {
        return this.nickname.hasError('required')
            ? this.MSG_REQUIRED
            : this.email.hasError('nickname')
                ? this.MSG_INVALID_NICKNAME
                : this.MSG_EMPTY;
    }

    getPasswordErrorMessage() {
        return this.password.hasError('required')
            ? this.MSG_REQUIRED
            : this.password.hasError('password')
                ? this.MSG_INVALID_PASSWORD
                : this.MSG_EMPTY;
    }

    getPasswordConfirmErrorMessage() {
        return this.passwordConfirm.hasError('required')
            ? this.MSG_REQUIRED
            : this.passwordConfirm.hasError('password')
                ? this.MSG_INVALID_PASSWORD
                : this.MSG_EMPTY;
    }

    getEmailErrorMessage() {
        return this.email.hasError('required')
            ? this.MSG_REQUIRED
            : this.email.hasError('email')
                ? this.MSG_INVLID_EMAIL
                : this.MSG_EMPTY;
    }

}
