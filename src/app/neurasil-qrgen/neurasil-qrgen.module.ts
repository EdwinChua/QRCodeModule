import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QRCodeComponent as NeurasilQRCodeComponent } from './qrcode/qrcode.component';



@NgModule({
  declarations: [NeurasilQRCodeComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NeurasilQRCodeComponent
  ]
})
export class NeurasilQRGenModule { }
