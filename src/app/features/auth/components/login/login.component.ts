import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SocialMediaModel } from '@app/models';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { requestLoadSocialMedias } from 'src/app/store/app.actions';
import { selectSocialMedias } from 'src/app/store/app.selectors';
import { ApplicationState } from 'src/app/store/app.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  socialMedias$: Observable<Array<SocialMediaModel>>;

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private store: Store<ApplicationState>) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.store.dispatch(requestLoadSocialMedias());

    this.socialMedias$ = this.store.select(selectSocialMedias);
  }

  onSubmit(form: FormGroup) {
    console.log(form.value)
  }

}
