import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { JiratokenComponent } from './jiratoken/jiratoken.component';
import { UserService } from './services/user.service';
import { AuthGuard } from './guards/auth.guard';
import { JiraGuard } from './guards/jira.guard';
import { DragDropModule } from '@angular/cdk/drag-drop';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    JiratokenComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DragDropModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
    AuthGuard,
    JiraGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
