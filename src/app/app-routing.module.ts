import { ContactComponent } from './components/contact/contact.component';
import { CommercialComponent } from './components/commercial/commercial.component';
import { RealisationsComponent } from './components/realisations/realisations.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SoumissionComponent } from './components/soumission/soumission.component';
import { SelectiveStrategy } from './services/selective.strategy';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { MarcheDeBetonComponent } from './components/services/marche-de-beton/marche-de-beton.component';
import { DalleDeBetonComponent } from './components/services/dalle-de-beton/dalle-de-beton.component';
import { FondationMaisonComponent } from './components/services/fondation-maison/fondation-maison.component';
import { AgrandissementMaisonComponent } from './components/services/agrandissement-maison/agrandissement-maison.component';
import { ExcavationServicesComponent } from './components/services/excavation-services/excavation-services.component';
import { DescenteSousSolBetonComponent } from './components/services/descente-sous-sol-beton/descente-sous-sol-beton.component';
import { BalconEnBetonComponent } from './components/services/balcon-en-beton/balcon-en-beton.component';
import { FissureBetonComponent } from './components/services/fissure-beton/fissure-beton.component';
import { CoffrageComponent } from './components/services/coffrage/coffrage.component';


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
    path:'services',
    component: ServicesComponent
  },
  {
    path:'contact',
    component: ContactComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'coffrage-saint-lin-laurentides.html',
    component: SoumissionComponent
  },
  {
    path:'coffrage-fondation-de-beton.html',
    component: ServicesComponent
  },   
  {
    path:'services/marche-de-beton',
    component: MarcheDeBetonComponent
  },   
  {
    path:'services/concrete-step',
    component: MarcheDeBetonComponent
  }, 
  {
    path:'services/dalle-de-beton',
    component: DalleDeBetonComponent
  },   
  {
    path:'services/concrete-slab',
    component: DalleDeBetonComponent
  }, 
  {
    path:'services/fondation-maison',
    component: FondationMaisonComponent
  },   
  {
    path:'services/house-foundation',
    component: FondationMaisonComponent
  }, 
  {
    path:'services/agrandissement-maison',
    component: AgrandissementMaisonComponent
  }, 
  {
    path:'services/house-extension',
    component: AgrandissementMaisonComponent
  }, 
  {
    path:'services/excavation-services',
    component: ExcavationServicesComponent
  }, 
  {
    path:'services/mini-excavation',
    component: ExcavationServicesComponent
  }, 
  {
    path:'services/descente-sous-sol-beton',
    component: DescenteSousSolBetonComponent
  }, 
  {
    path:'services/concrete-basement',
    component: DescenteSousSolBetonComponent
  }, 
  {
    path:'services/balcon-en-beton',
    component: BalconEnBetonComponent
  }, 
  {
    path:'services/concrete-balcony',
    component: BalconEnBetonComponent
  }, 
  {
    path:'services/fissure-beton',
    component: FissureBetonComponent
  }, 
  {
    path:'services/concrete-repair',
    component: FissureBetonComponent
  }, 
  {
    path:'services/coffrage',
    component: CoffrageComponent
  }, 
  {
    path:'services/formwork',
    component: CoffrageComponent
  }, 



  {
    path:'**',
    component: HomeComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: SelectiveStrategy, initialNavigation: 'enabledBlocking' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
