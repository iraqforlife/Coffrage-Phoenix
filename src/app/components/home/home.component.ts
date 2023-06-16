import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  services: any[] = [
    {
      image :'coffrage-de-beton.jpg',
      name:'home.p1',
      en:'services/formwork',
      fr:'services/coffrage',
    },
    {
      image :'fondation.jpg',
      name:'home.p2',
      en:'services/house-foundation',
      fr:'services/fondation-maison',
    },
    {
      image :'agrandissement.jpg',
      name:'home.p4',
      en:'services/house-extension',
      fr:'services/agrandissement-maison',
    },
    {
      image :'balcon-de-beton.jpg',
      name:'concrete-balcony',
      en:'services/concrete-balcony',
      fr:'services/balcon-en-beton',
    },
    {
      image :'descente-de-sous-sol-en-beton_003.png',
      name:'home.p3',
      en:'services/concrete-basement',
      fr:'services/descente-sous-sol-beton',
    },
    {
      image :'escalier-de-beton.jpg',
      name:'concrete-staircase',
      en:'services/concrete-step',
      fr:'services/marche-de-beton',
    },
    {
      image :'dalle.jpeg',
      name:'concrete-dalle',
      en:'services/concrete-slab',
      fr:'services/dalle-de-beton',
    },
    {
      image :'excavation.jpg',
      name:'Mini excavation',
      en:'services/excavation-services',
      fr:'services/mini-excavation',
    },
    {
      image :'reparation-de-fissure.jpg',
      name:'repair',
      en:'services/concrete-repair',
      fr:'services/fissure-beton',
    },

  ];
  responsiveOptions = [
    {
        breakpoint: '1400px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '1220px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '1100px',
        numVisible: 1,
        numScroll: 1
    }
  ];

  constructor(private meta: Meta, private translate: TranslateService,) {
    this.translate.get('meta.home').subscribe(desc => {
      this.meta.updateTag({ name: 'description', content: desc});
    });
  }
  get isFrench() {
    return this.translate.currentLang == 'fr';
  }
}
