import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { SocialMediaModel } from '@app/models';

@Component({
  selector: 'app-social-media-list',
  templateUrl: './social-media-list.component.html',
  styleUrls: ['./social-media-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialMediaListComponent implements OnInit {

  @Input()
  socialMedias: ReadonlyArray<SocialMediaModel>;

  constructor() { }

  ngOnInit(): void {
  }

}
