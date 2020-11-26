import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';
import { BudgetItemModel } from '../shared/models/budget-item.model';

@Component({
  selector: 'app-budget-items-list',
  templateUrl: './budget-items-list.component.html',
  styleUrls: ['./budget-items-list.component.scss'],
  animations: [

    trigger('simpleFadeAnimation', [

      state('in', style({ opacity: 1 })),

      transition(':enter', [
        style({ opacity: 0 }),
        animate(200)
      ]),

      transition(':leave',
        animate(400, style({ opacity: 0 })))
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BudgetItemsListComponent implements OnInit {

  @Input()
  budgetItems: Array<BudgetItemModel>;

  @Output()
  delete: EventEmitter<BudgetItemModel> = new EventEmitter<BudgetItemModel>();

  constructor(public dialog: MatDialog, private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  onDeleteButtonClicked(item: BudgetItemModel) {
    this.delete.emit(item);
  }

  onCardClicked(item: BudgetItemModel) {

    const dialogRef = this.dialog.open(EditItemModalComponent, {
      width: '580px',
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.budgetItems[this.budgetItems.indexOf(item)] = result;
        this.ref.markForCheck();
      }
    })
  }

  trackByIndex = (index: number, item: BudgetItemModel) => index;
}
