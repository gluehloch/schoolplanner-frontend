import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SchoolComponent } from './school/school.component';

const routes: Routes = [
    { path: 'school', component: SchoolComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'user', component: UserComponent },
    { path: 'login', component: LoginComponent },
    { path: '', component: LoginComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
