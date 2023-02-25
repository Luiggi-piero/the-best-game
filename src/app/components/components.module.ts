import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BarGraphicComponent } from './bar-graphic/bar-graphic.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [NavbarComponent, BarGraphicComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, BarGraphicComponent],
})
export class ComponentsModule {}
