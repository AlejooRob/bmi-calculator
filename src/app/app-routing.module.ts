import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeginComponent } from './components/begin/begin.component';
import { ResultComponent } from './components/result/result.component';

const routes: Routes = [
  { path: '', component: BeginComponent},
  { path: 'resultado/:value', component: ResultComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
