import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { BudgetItemModel } from 'src/app/shared/models/budget-item.model';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BudgetItemCardComponent implements OnInit {

  @Input()
  isIncome: boolean = true;

  @Input() item: BudgetItemModel;

  constructor() { }

  ngOnInit(): void {
  }

}
