import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-soumission',
  templateUrl: './soumission.component.html',
  styleUrls: ['./soumission.component.scss']
})
export class SoumissionComponent {
  isFrench = true;
  constructor(public translate: TranslateService){
    this.isFrench = translate.currentLang == 'fr';
  }
}
