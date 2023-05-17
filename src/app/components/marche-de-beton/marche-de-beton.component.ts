import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-marche-de-beton',
  templateUrl: './marche-de-beton.component.html',
  styleUrls: ['./marche-de-beton.component.scss']
})
export class MarcheDeBetonComponent {
  constructor(public translate: TranslateService) {}
  get isFrench() {
    return this.translate.currentLang == 'fr';
  }
}
