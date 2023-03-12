import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  isFrench = true;
  
  constructor(public translate: TranslateService){
    this.isFrench = translate.currentLang == 'fr';
    translate.onLangChange.subscribe((params: LangChangeEvent) => { 
      this.isFrench = params.lang == 'fr';
    });
  }
}
