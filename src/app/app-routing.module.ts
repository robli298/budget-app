import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { LoginComponent } from './login/login.component';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './shared/components/layout/layout.component';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent
},
{
  path: '',
  component: LayoutComponent,
  children: [
  ],
}, { path: '', redirectTo: '', pathMatch: 'full' },
  //{ path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
