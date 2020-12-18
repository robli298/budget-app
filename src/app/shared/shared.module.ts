import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/layout/footer/footer.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';

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
