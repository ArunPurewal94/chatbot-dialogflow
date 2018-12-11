import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ChatService } from './services/chat/chat.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpModule
  ],
  providers: [
  ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
