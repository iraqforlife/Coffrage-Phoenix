import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor(private meta: Meta, private translate: TranslateService,) {
    this.translate.get('meta.contact').subscribe(desc => {
      this.meta.updateTag({ name: 'description', content: desc});
    });
  }
  get isFrench() {
    return this.translate.currentLang == 'fr';
  }
}
