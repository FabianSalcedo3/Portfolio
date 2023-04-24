import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { AboutItemComponent } from './about/about-item/about-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProgettiComponent } from './progetti/progetti.component';
import { ProgettoItemComponent } from './progetti/progetto-item/progetto-item.component';
import { SkillsComponent } from './skills/skills.component';
import { ContattiComponent } from './contatti/contatti.component';
import { FooterComponent } from './footer/footer.component';
import { ScrollManagerDirective } from './direttive/scroll-manager.directive';
import { ScrollSectionDirective } from './direttive/scroll-section.directive';
import { ScrollAnchorDirective } from './direttive/scroll-anchor.directive';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    AboutItemComponent,
    ProgettiComponent,
    ProgettoItemComponent,
    SkillsComponent,
    ContattiComponent,
    FooterComponent,
    ScrollManagerDirective,
    ScrollSectionDirective,
    ScrollAnchorDirective,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
