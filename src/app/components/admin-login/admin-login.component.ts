import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  loginForm: FormGroup;
  message: "";
  
  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit(): void {
    if(!window.location.href.toString().endsWith("index.html")) {
      let id = document.getElementById("headermain") as HTMLElement;
      console.log("tag: ", id);
      if(id.classList.length == 0) {   
        id.classList.add("background-header");
      }
    }
    this.initForm();
  }

  initForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  loginProcess() {
    if(this.loginForm.valid) {
      this.apiService.login(this.loginForm.value).subscribe(result => {
        console.log("result: ", result);
        if (result.token) {
          localStorage.setItem('token', result.token);
          this.router.navigate(['blogposts']);
        } else {
          this.message = result.message;
        }
      }, (err) => {
        console.log("error: ", err);
      });
    }
  }
}
