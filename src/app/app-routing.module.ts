import { ContactComponent } from './components/contact/contact.component';
import { CommercialComponent } from './components/commercial/commercial.component';
import { RealisationsComponent } from './components/realisations/realisations.component';
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
  {
    path: 'realisation',
    component: RealisationsComponent,
  },
  {
    path:'commercial',
    component: CommercialComponent
  },
  {
    path:'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: SelectiveStrategy }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
