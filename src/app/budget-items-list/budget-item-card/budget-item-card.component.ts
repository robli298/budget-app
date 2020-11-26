import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BudgetItemModel } from 'src/app/shared/models/budget-item.model';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BudgetItemCardComponent implements OnInit {

  @Input() item: BudgetItemModel;
  @Output() xButtonClick: EventEmitter<void> = new EventEmitter<void>();
  @Output() cardClicked: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onXButtonClick() {
    this.xButtonClick.emit();
  }

  onCardClicked() {
    this.cardClicked.emit();
  }
}
