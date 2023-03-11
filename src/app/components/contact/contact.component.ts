import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  isFrench = true;
  constructor(public translate: TranslateService){
    this.isFrench = translate.currentLang == 'fr';
  }
}
