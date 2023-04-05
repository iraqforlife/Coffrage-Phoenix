import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  services: any[] = [{
    image :'coffrage-de-beton.jpg',
    name:'home.p1',

  }];
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

  constructor(public translate: TranslateService) {}
  get isFrench() {
    return this.translate.currentLang == 'fr';
  }
}
