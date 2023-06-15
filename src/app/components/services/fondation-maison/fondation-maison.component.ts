import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-fondation-maison',
  templateUrl: './fondation-maison.component.html'
})
export class FondationMaisonComponent {
  constructor(private meta: Meta, private translate: TranslateService,) {
    this.translate.get('meta.fondation').subscribe(desc => {
      this.meta.updateTag({ name: 'description', content: desc});
    });
  }
  get isFrench() {
    return this.translate.currentLang == 'fr';
  }

}
