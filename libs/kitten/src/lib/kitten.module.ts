import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ButtonComponent, LayoutComponent],
  exports: [ButtonComponent],
})
export class KittenModule {}
