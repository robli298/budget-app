import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media-list',
  templateUrl: './social-media-list.component.html',
  styleUrls: ['./social-media-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialMediaListComponent implements OnInit {

  @Input()
  socialMedias: {url: string, iconClass: string}

  constructor() { }

  ngOnInit(): void {
  }

}
