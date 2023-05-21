import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-balcon-en-beton',
  templateUrl: './balcon-en-beton.component.html'
})
export class BalconEnBetonComponent {
  constructor(public translate: TranslateService) {}
  get isFrench() {
    return this.translate.currentLang == 'fr';
  }

}
