import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StepperComponent } from './stepper/stepper.component';
import { HomeComponent } from './home/home.component';
import { ChildDemoComponent } from './child-demo/child-demo.component';
import { ViewChildComponent } from './view-child/view-child.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'stepper', component: StepperComponent},
  {path: 'demo', component: ChildDemoComponent},
  {path: 'viewChild', component: ViewChildComponent},


  {path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
