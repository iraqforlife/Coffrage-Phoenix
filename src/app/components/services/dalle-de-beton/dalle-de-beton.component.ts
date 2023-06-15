import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dalle-de-beton',
  templateUrl: './dalle-de-beton.component.html',
})
export class DalleDeBetonComponent {
  constructor(private meta: Meta, private translate: TranslateService,) {
    this.translate.get('meta.dalle').subscribe(desc => {
      this.meta.updateTag({ name: 'description', content: desc});
    });
  }
  get isFrench() {
    return this.translate.currentLang == 'fr';
  }

}
