import { Routes } from '@angular/router';
import { PlaygroundComponent } from './features/playground/playground.component';
import { LoginComponent } from './features/login/login.component';
import { HomeComponent } from './home/home.component';
import { PacientListComponent } from './features/pacients/pacient-list/pacient-list.component';
import { PacientFormComponent } from './features/pacients/pacient-form/pacient-form.component';

export const routes: Routes = [
    { path: 'playground', component: PlaygroundComponent },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'pacients/list', component: PacientListComponent },
    { path: 'pacients/new', component: PacientFormComponent },
    { path: 'pacients/:id', component: PacientFormComponent },
    { path: '*', component: LoginComponent },

];
