import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateLayoutService } from 'src/app/services/state-layout.service';
import { LayoutModel } from '../models/layout.model';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  layoutData$: Observable<LayoutModel>;

  sidebarStatus: string;

  constructor(private layoutService: StateLayoutService) { }

  ngOnInit(): void {
    this.layoutData$ = this.layoutService.load();
  }
}
