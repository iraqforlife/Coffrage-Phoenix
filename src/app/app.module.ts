import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AppRoutingModule } from './app-routing.module';
import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HomeComponent } from './components/home/home.component';
import { SoumissionComponent } from './components/soumission/soumission.component';
import { ContactComponent } from './components/contact/contact.component';
import { RealisationsComponent } from './components/realisations/realisations.component';
import { CommercialComponent } from './components/commercial/commercial.component';
import { MatCommonModule } from '@angular/material/core';
import { MaterialModule } from './modules/material.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    AppRoutingModule,
    MatCommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    SoumissionComponent,
    ContactComponent,
    RealisationsComponent,
    CommercialComponent,
    ScrollTopComponent,
    AboutComponent
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule { }

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}