import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
})
export class ServicesComponent {
  constructor(public translate: TranslateService) {}
  get isFrench() {
    return this.translate.currentLang == 'fr';
  }

}
