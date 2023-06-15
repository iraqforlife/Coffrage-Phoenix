import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  constructor(private meta: Meta, private translate: TranslateService,) {
    this.translate.get('meta.entreprise').subscribe(desc => {
      this.meta.updateTag({ name: 'description', content: desc});
    });
  }
}
