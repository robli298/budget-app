import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { LayoutModel } from 'src/app/core/models';
import { StateLayoutService } from 'src/app/core/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  layoutData$: Observable<LayoutModel>;

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private layoutService: StateLayoutService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.layoutData$ = this.layoutService.load();
  }

  onSubmit(form: FormGroup) {
    console.log(form.value)
  }

}
