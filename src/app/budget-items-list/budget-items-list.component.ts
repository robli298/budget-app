import { Component, Input, OnInit } from '@angular/core';
import { BudgetItemModel } from '../shared/models/budget-item.model';

@Component({
  selector: 'app-budget-items-list',
  templateUrl: './budget-items-list.component.html',
  styleUrls: ['./budget-items-list.component.scss']
})
export class BudgetItemsListComponent implements OnInit {

  @Input()
  budgetItems: Array<BudgetItemModel>;

  constructor() { }

  ngOnInit(): void {
  }

  trackByIndex = (index: number, item: BudgetItemModel) => index;
}
