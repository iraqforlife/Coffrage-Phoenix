import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-agrandissement-maison',
  templateUrl: './agrandissement-maison.component.html'
})
export class AgrandissementMaisonComponent {
  constructor(public translate: TranslateService) {}
  get isFrench() {
    return this.translate.currentLang == 'fr';
  }

}
