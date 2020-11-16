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

  @Input() item: BudgetItemModel = new BudgetItemModel('', null);
  @Output() formSubmit: EventEmitter<BudgetItemModel> = new EventEmitter<BudgetItemModel>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.formSubmit.emit(form.value);
  }

}
