import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BudgetItemModel } from '../shared/models/budget-item.model';

@Component({
  selector: 'app-edit-item-modal',
  templateUrl: './edit-item-modal.component.html',
  styleUrls: ['./edit-item-modal.component.scss']
})
export class EditItemModalComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<EditItemModalComponent>, @Inject(MAT_DIALOG_DATA) public item: BudgetItemModel) { }

  ngOnInit(): void {
  }

  onSubmitted(updatedItem: BudgetItemModel) {
    this.dialogRef.close(updatedItem);
  }
}
