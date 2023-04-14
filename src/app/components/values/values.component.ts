import { Component } from '@angular/core';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.scss']
})
export class ValuesComponent {
  values: any[] = [
    {
      h5:"Integrity",
      p:"Integrity.p",
      icon:"fa-user"
    },
    {
      h5:"Quality",
      p:"Quality.p",
      icon:"fa-dumbbell"
    },
    {
      h5:"Trust",
      p:"Trust.p",
      icon:"fa-handshake"
    },
    {
      h5:"Innovation",
      p:"Innovation.p",
      icon:"fa-lightbulb"
    },

  ];
  responsiveOptions = [
    {
        breakpoint: '1400px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '1220px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '900px',
        numVisible: 1,
        numScroll: 1
    }
  ];
}
