import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AuthGuard } from './guards/auth.guard';
import { JiraGuard } from './guards/jira.guard';
import { JiratokenComponent } from './jiratoken/jiratoken.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'system',
    component: MainComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'setup-jira',
    component: JiratokenComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'system'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
