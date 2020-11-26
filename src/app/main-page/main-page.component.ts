import { Component, OnInit } from '@angular/core';
import { BudgetItemModel } from '../shared/models/budget-item.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  budgetItems: BudgetItemModel[] = new Array<BudgetItemModel>();
  totalAmount: number;

  constructor() { }

  ngOnInit(): void {
  }

  addNewItem(item: BudgetItemModel) {
    this.budgetItems = this.budgetItems.concat([item]);
    this.updateTotalAmount();
  }

  onDeleteItem(item: BudgetItemModel) {
    this.budgetItems.splice(this.budgetItems.indexOf(item), 1);
    this.updateTotalAmount();
  }

  updateTotalAmount() {
    if (this.budgetItems && this.budgetItems.length !== 0) {
      this.totalAmount = this.budgetItems.map(item => item.amount).reduce((a, b) => a + b);
      return;
    }
    this.totalAmount = 0;
  }

}
