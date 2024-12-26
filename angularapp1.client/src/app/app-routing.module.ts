import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ChapComponent } from './components/chap/chap.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { Chap2Component } from './components/chap2/chap2.component';
import { Chap3Component } from './components/chap3/chap3.component';
import { CertificateComponent } from './components/certificate/certificate.component';
import { Quiz2Component } from './components/quiz2/quiz2.component';
import { Quiz3Component } from './components/quiz3/quiz3.component';



;

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'chap', component: ChapComponent},
  { path: 'chap2', component: Chap2Component},
  { path: 'chap3', component: Chap3Component},
  { path: 'quiz', component: QuizComponent},
  { path: 'quiz2', component: Quiz2Component},
  { path: 'quiz3', component: Quiz3Component},
  { path: 'certificate', component: CertificateComponent},

  {path: '**', redirectTo:'home', pathMatch:'full'},
  {path: '', component:HomeComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }