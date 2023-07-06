import { Component } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  constructor(private r :Router, private activedroute: ActivatedRoute, private formBuilder:FormBuilder ){}


  registrationFormGroup = new FormGroup({
    uname: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
    password: new FormControl('', [Validators.required, Validators.pattern('((?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15})')])
  });

  formSubmitted = false;

  onSubmit(): void {
    this.formSubmitted = true;

    if (this.registrationFormGroup.valid) {
      console.log('loged in')
    }
  }

}
