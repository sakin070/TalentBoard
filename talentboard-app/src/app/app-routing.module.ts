import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {JobFormComponent} from "./job-view/job-form/job-form.component";

const routes: Routes = [
    {path: '', component: NavBarComponent },
    {path: 'login', component: LoginPageComponent},
  {path: 'addjob', component: JobFormComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    providers:  []
})
export class AppRoutingModule {}
