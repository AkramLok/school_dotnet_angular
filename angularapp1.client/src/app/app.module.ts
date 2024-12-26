import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { ChapComponent } from './components/chap/chap.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { Chap2Component } from './components/chap2/chap2.component';
import { Chap3Component } from './components/chap3/chap3.component';
import { CertificateComponent } from './components/certificate/certificate.component';
import { Quiz2Component } from './components/quiz2/quiz2.component';
import { Quiz3Component } from './components/quiz3/quiz3.component';
import { HttpClientModule } from '@angular/common/http';
import { GlobalService } from './global.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    ChapComponent,
    QuizComponent,
    Chap2Component,
    Chap3Component,
    CertificateComponent,
    Quiz2Component,
    Quiz3Component,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    AppRoutingModule,
    HttpClientModule,

    
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
