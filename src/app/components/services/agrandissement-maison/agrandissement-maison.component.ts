import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-agrandissement-maison',
  templateUrl: './agrandissement-maison.component.html'
})
export class AgrandissementMaisonComponent {
  constructor(private meta: Meta, private translate: TranslateService,) {
    this.translate.get('meta.agrandissement').subscribe(desc => {
      this.meta.updateTag({ name: 'description', content: desc});
    });
  }
  get isFrench() {
    return this.translate.currentLang == 'fr';
  }
}
