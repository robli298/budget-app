import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddItemFormComponent } from './add-item-form/add-item-form.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BudgetItemCardComponent } from './budget-items-list/budget-item-card/budget-item-card.component';
import { BudgetItemsListComponent } from './budget-items-list/budget-items-list.component';
import { MainPageComponent } from './main-page/main-page.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AddItemFormComponent,
    BudgetItemsListComponent,
    BudgetItemCardComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule, BrowserAnimationsModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
