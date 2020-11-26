import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetItemModel } from '../shared/models/budget-item.model';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddItemFormComponent implements OnInit {

  @Input() item: BudgetItemModel;
  @Output() formSubmit: EventEmitter<BudgetItemModel> = new EventEmitter<BudgetItemModel>();

  isNewItem: boolean;
  buttonLabel: string = 'Save';

  constructor() { }

  ngOnInit(): void {
    this.isNewItem = !this.item;
    if (this.isNewItem) {
      this.item = new BudgetItemModel('', null);
      this.buttonLabel = 'Add';
    }
  }

  onSubmit(form: NgForm) {
    this.formSubmit.emit(form.value);
    form.reset();
  }

}
