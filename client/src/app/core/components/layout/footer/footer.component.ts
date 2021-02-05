import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { SocialMediaModel } from 'src/app/core/models';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {

  @Input()
  version!: number;

  @Input()
  socialMedias!: Array<SocialMediaModel>;

  constructor() { }

  ngOnInit(): void {
  }

}
