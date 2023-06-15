import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-balcon-en-beton',
  templateUrl: './balcon-en-beton.component.html'
})
export class BalconEnBetonComponent {
  constructor(private meta: Meta, private translate: TranslateService,) {
    this.translate.get('meta.balcon').subscribe(desc => {
      this.meta.updateTag({ name: 'description', content: desc});
    });
  }
  get isFrench() {
    return this.translate.currentLang == 'fr';
  }

}
