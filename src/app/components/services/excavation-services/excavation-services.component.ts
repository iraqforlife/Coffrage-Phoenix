import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-excavation-services',
  templateUrl: './excavation-services.component.html'
})
export class ExcavationServicesComponent {
  constructor(private meta: Meta, private translate: TranslateService,) {
    this.translate.get('meta.excavation').subscribe(desc => {
      this.meta.updateTag({ name: 'description', content: desc});
    });
  }
  get isFrench() {
    return this.translate.currentLang == 'fr';
  }

}
