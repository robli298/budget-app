import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { LayoutComponent } from './shared/layout/layout.component';

const routes: Routes = [{
  path: '',
  component: MainPageComponent
}, {
  path: 'test',
  component: LayoutComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
