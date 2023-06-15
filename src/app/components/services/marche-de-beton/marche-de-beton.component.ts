import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-marche-de-beton',
  templateUrl: './marche-de-beton.component.html',
})
export class MarcheDeBetonComponent {
  constructor(private meta: Meta, private translate: TranslateService,) {
    this.translate.get('meta.marches').subscribe(desc => {
      this.meta.updateTag({ name: 'description', content: desc});
    });
  }
  get isFrench() {
    return this.translate.currentLang == 'fr';
  }
}
