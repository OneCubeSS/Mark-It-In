import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent implements OnInit {
  loginForm: FormGroup;
  message: '';
  lostpwd = false;
  success = false;
  lostForm: FormGroup;
  emailUser: '';

  constructor(private router: Router, private apiService: ApiService) {}

  ngOnInit(): void {
    if (!window.location.href.toString().endsWith('index.html')) {
      let id = document.getElementById('headermain') as HTMLElement;
      console.log('tag: ', id);
      if (id.classList.length == 0) {
        id.classList.add('background-header');
      }
    }
    if (!this.isLoggedIn()) {
      this.initForm();
    } else {
      this.router.navigate(['blogposts']);
    }
  }

  isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }

  initForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });

    this.lostForm = new FormGroup({
      emailcheck: new FormControl('', [Validators.required]),
    });
  }

  loginProcess() {
    if (this.loginForm.valid) {
      this.apiService.login(this.loginForm.value).subscribe(
        (result) => {
          console.log('result: ', result);
          if (result.token) {
            localStorage.setItem('access_token', result.token);
            this.router.navigate(['blogposts']);
          } else {
            this.message = result.message;
          }
        },
        (err) => {
          console.log('error: ', err);
        }
      );
    }
  }

  lost() {
    this.lostpwd = true;
  }

  valMail() {
    if (this.lostForm.valid) {
      this.emailUser = this.lostForm.value['emailcheck'];
      this.apiService.checkUser(this.emailUser).subscribe(
        (result) => {
          console.log('Result :', result);
          if (!result.success) {
            this.lostForm.controls['emailcheck'].setErrors({ nomail: true });
          } else {
            this.lostForm.controls['emailcheck'].setErrors(null);
          }
        },
        (err) => {
          console.log('error: ', err);
        }
      );
    }
  }

  submitLost() {
    if (this.lostForm.valid) {
      this.emailUser = this.lostForm.value['emailcheck'];
      this.apiService.sendPwd(this.emailUser).subscribe(
        (result) => {
          console.log('Result :', result);
          if (result.success) {
            this.success = true;
          }
        },
        (err) => {
          console.log('error: ', err);
        }
      );
    }
  }
}
