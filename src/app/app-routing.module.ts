import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SoumissionComponent } from './components/soumission/soumission.component';
import { SelectiveStrategy } from './services/selective.strategy';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'soumission',
    component: SoumissionComponent,
  },
  /*{
    path: 'details',
    component: CimcoDetailComponent,
  },
  {
    path:'admin',
    component: AdminComponent
  }*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: SelectiveStrategy }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
