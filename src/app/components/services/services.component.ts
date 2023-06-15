import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']

})
export class ServicesComponent {
  constructor(private meta: Meta, private translate: TranslateService,) {
    this.translate.get('meta.services').subscribe(desc => {
      this.meta.updateTag({ name: 'description', content: desc});
    });
  }
  get isFrench() {
    return this.translate.currentLang == 'fr';
  }
}
