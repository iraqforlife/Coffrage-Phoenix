import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-descente-sous-sol-beton',
  templateUrl: './descente-sous-sol-beton.component.html'
})
export class DescenteSousSolBetonComponent {
  constructor(private meta: Meta, private translate: TranslateService,) {
    this.translate.get('meta.descente').subscribe(desc => {
      this.meta.updateTag({ name: 'description', content: desc});
    });
  }
  get isFrench() {
    return this.translate.currentLang == 'fr';
  }

}
