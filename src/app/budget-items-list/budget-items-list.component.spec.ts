import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetItemsListComponent } from './budget-items-list.component';

describe('BudgetItemsListComponent', () => {
  let component: BudgetItemsListComponent;
  let fixture: ComponentFixture<BudgetItemsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetItemsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
