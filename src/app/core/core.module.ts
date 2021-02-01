import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../core/components/layout/footer/footer.component';
import { LayoutComponent } from '../core/components/layout/layout.component';
import { NavbarComponent } from '../core/components/layout/navbar/navbar.component';
import { SidebarComponent } from '../core/components/layout/sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [LayoutComponent,
        SidebarComponent,
        FooterComponent,
        NavbarComponent],
    imports: [
        RouterModule,
        SharedModule
    ]
})
export class CoreModule { }
