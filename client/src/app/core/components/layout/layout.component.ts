import { Component, OnInit } from '@angular/core';
import { LayoutModel, SocialMediaModel } from "@app/models";
import { LayoutService } from '@app/services';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromAppActions from 'src/app/store/app.actions';
import * as fromAppSelectors from 'src/app/store/app.selectors';
import { ApplicationState } from 'src/app/store/app.state';

@Component({
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  layoutData$!: Observable<LayoutModel>;
  socialMedias$!: Observable<ReadonlyArray<SocialMediaModel>>;

  sidebarStatus!: string;

  constructor(private layoutService: LayoutService,  private store: Store<ApplicationState>) { }

  ngOnInit(): void {
    this.layoutData$ = this.layoutService.load();

    this.store.dispatch(fromAppActions.requestLoadSocialMedias());

    this.socialMedias$ = this.store.select(fromAppSelectors.selectSocialMedias);
  }
}
