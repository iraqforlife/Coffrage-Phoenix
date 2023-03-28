import { Component } from '@angular/core';
import {  TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-soumission',
  templateUrl: './soumission.component.html',
})
export class SoumissionComponent {
  constructor(public translate: TranslateService) {}
  get isFrench() {
    return this.translate.currentLang == 'fr';
  }
}
