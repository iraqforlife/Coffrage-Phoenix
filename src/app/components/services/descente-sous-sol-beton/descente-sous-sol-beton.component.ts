import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-descente-sous-sol-beton',
  templateUrl: './descente-sous-sol-beton.component.html'
})
export class DescenteSousSolBetonComponent {
  constructor(public translate: TranslateService) {}
  get isFrench() {
    return this.translate.currentLang == 'fr';
  }

}
