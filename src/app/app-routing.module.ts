
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RailingsComponent } from './main/features/gelander/railings.component';
import { DoorsComponent } from './main/features/zaun/doors.component';
import { FenceComponent } from './main/features/tore/fence.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import {ContactMainComponent} from './contact/contact-main.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent },
    {
        path: 'railings',
        component: RailingsComponent
    },
    {
        path: 'doors',
        component: DoorsComponent
    },
    {
        path: 'fence',
        component: FenceComponent
    },
    {
        path: 'contact',
        component: ContactMainComponent
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }