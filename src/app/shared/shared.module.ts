import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { IonicModule } from '@ionic/angular';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { LoaderCComponent } from './loader-c/loader-c.component';



@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  declarations: [
    CardComponent,
    ErrorMessageComponent,
    LoaderCComponent
  ],
  exports: [
    CardComponent,
    ErrorMessageComponent,
    LoaderCComponent
  ],
})
export class SharedModule { }
