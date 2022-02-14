import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { IonicModule } from '@ionic/angular';
import { ErrorMessageComponent } from './error-message/error-message.component';



@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  declarations: [
    CardComponent,
    ErrorMessageComponent
  ],
  exports: [
    CardComponent,
    ErrorMessageComponent
  ],
})
export class SharedModule { }
