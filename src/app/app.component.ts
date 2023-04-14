import { Component, } from '@angular/core';
import { slideInAnimation } from './app.animation';
import { Meta } from '@angular/platform-browser';
import { 
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
  Router,
  Event, } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [slideInAnimation],
})
export class AppComponent {
  loading:boolean = false;
  constructor(private router: Router, private meta: Meta, private translate: TranslateService,) {
      // list of languages available
      translate.addLangs(['en', 'fr']);
  
      // // this language will be used as a fallback when a translation isn't found in the current language
      translate.setDefaultLang('fr');
      const langChosen = localStorage.getItem('lang-chosen');
      if (langChosen) {
        this.translate.use(langChosen);
      } else {
        const browserLang = translate.getBrowserLang();
        if(browserLang) translate.use(browserLang);
        else translate.use('fr');
      }
      router.events.subscribe((routerEvent: Event) => {
        this.checkRouterEvent(routerEvent);
      });
      this.translate.get('home.title').subscribe(desc => {
        this.meta.addTag({ name: 'description', content: desc});
      });
  }
  checkRouterEvent(routerEvent: Event): any {
    if (routerEvent instanceof NavigationStart) {
      this.loading = true;
    }
    if (
      routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError
    ) {
      this.loading = false;
    }
  }
  english() {
    localStorage.setItem('lang-chosen', 'en');
    this.translate.use('en');
    this.meta.updateTag({name:'language',content:'English'});
    this.translate.get('home.title').subscribe(desc => {
      this.meta.updateTag({ name: 'description', content: desc});
    });
  } 
  french() {
    localStorage.setItem('lang-chosen', 'fr');
    this.translate.use('fr');
    this.meta.updateTag({name:'language',content:'French'});
    this.translate.get('home.title').subscribe(desc => {
      this.meta.updateTag({ name: 'description', content: desc});
    });
  }
  get isFrench() {
    return this.translate.currentLang == 'fr';
  }
}