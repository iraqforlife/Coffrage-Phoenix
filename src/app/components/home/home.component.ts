import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(public translate: TranslateService) {}
  get isFrench() {
    return this.translate.currentLang == 'fr';
  }
}
