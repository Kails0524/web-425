  // Title: Exercise 7.2 - Reactive Forms
  // Author: Professor Krasso
  // Date: 4 Dec 2022
  // Modified By: Kailee Stephens
  // Description: GPA Calculator App
  // Code Attribution: Code and instruction provided by Professor Krasso's videos and assignment docs.

  import { Component, OnInit } from '@angular/core';
  import { FormBuilder, FormGroup } from '@angular/forms';
  import { Router } from '@angular/router';
  import { SignInService } from '../sign-in.service';
  import { CookieService } from 'ngx-cookie-service';
  
  @Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.css']
  })
  export class SignInComponent implements OnInit {
  
    signinForm!: FormGroup;
    errorMessage!: string;
  
    constructor(private router: Router, private cookieService: CookieService, private fb: FormBuilder, private signinService: SignInService) { }
  
    ngOnInit(): void {
      this.signinForm = this.fb.group ({
        studentId: ''
      })
    }
  
    //function that handles adding cookies to user's browser and validates ID
    onSubmit() {
      const formValues = this.signinForm.value;
      const studentId = parseInt(formValues.studentId);
  
      if (this.signinService.validate(studentId)) {
        this.cookieService.set('session_user', studentId.toString(), 1);
        this.router.navigate(['/'])
      } else {
        this.errorMessage = 'The student ID entered is invalid. Please try again.';
      }
    }
  
  }