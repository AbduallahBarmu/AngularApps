
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { PopularMenuComponent } from './popular-menu/popular-menu.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { SharedModule } from '../shared/shared.module';
import { HeroComponent } from './hero/hero.component';



@NgModule({
  declarations: [  
    AboutComponent,

    ContactUsComponent,
    FooterComponent,
    PopularMenuComponent,
    DeliveryComponent,
    HeroComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports:[   
    AboutComponent,
 
    ContactUsComponent,
    FooterComponent,
    PopularMenuComponent,
    DeliveryComponent,
    HeroComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HomeModule { }
