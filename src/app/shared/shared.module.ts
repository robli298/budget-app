import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SocialMediaListComponent } from './components/social-media-list/social-media-list.component';

@NgModule({
  declarations: [SocialMediaListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ReactiveFormsModule,
    SocialMediaListComponent,
    CommonModule
  ]
})
export class SharedModule { }
