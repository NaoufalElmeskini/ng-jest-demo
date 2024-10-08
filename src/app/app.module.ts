import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { SelectAnimalComponent } from './select-name/select-animal.component';
import {FormsModule} from '@angular/forms';
import { AnimalContestComponent } from './animal-contest/animal-contest.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    SelectAnimalComponent,
    AnimalContestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
