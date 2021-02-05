import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {

  @Input()
  alerts!: Array<{ class: string }>;

  @Output()
  toggleClicked = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

}
