import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './layout/footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

@NgModule({
  declarations: [LayoutComponent,
    SidebarComponent,
    FooterComponent,
    NavbarComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
