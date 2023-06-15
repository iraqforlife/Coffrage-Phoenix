import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-realisations',
  templateUrl: './realisations.component.html',
  styleUrls: ['./realisations.component.scss']

})
export class RealisationsComponent {
  constructor(private meta: Meta, private translate: TranslateService,) {
    this.translate.get('meta.realisations').subscribe(desc => {
      this.meta.updateTag({ name: 'description', content: desc});
    });
  }
}
