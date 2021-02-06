import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { LayoutComponent } from './components/layout/layout.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderComponent } from './components/layout/header/header.component';

const components = [ButtonComponent, LayoutComponent, HeaderComponent];
@NgModule({
  imports: [CommonModule, MatSidenavModule],
  declarations: [components],
  exports: [components],
})
export class CoreModule {}
