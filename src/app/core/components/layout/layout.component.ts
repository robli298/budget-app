import { Component, OnInit } from '@angular/core';
import { LayoutModel } from "@app/models";
import { StateLayoutService } from '@app/services';
import { Observable } from 'rxjs';


@Component({
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
