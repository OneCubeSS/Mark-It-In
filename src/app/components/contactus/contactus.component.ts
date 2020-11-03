import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  contactform: FormGroup;
  submitted = false;
  mobileno = "^((\\+91-?)|0)?[0-9]{10}$"; 
  emailrex = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(private formBuilder: FormBuilder,
    private apiService: ApiService,) {
    console.log("location: ", window.location.href);
   }

  ngOnInit(): void {
    if(window.location.href.toString().endsWith("contactus")) {
      let id = document.getElementById("headermain") as HTMLElement;
      console.log("tag: ", id);
      if(id.classList.length == 0) {   
        id.classList.add("background-header");
      }
    }
    //form
    this.contactform = this.formBuilder.group({
      name: ['', Validators.required],
      number: ['', [Validators.required, Validators.pattern(this.mobileno)]],
        // Validators.pattern('(0/91)?[7-9][0-9]{9}')]],
      email: ['', [Validators.required, Validators.pattern(this.emailrex)]],
      website: [''],
      goal: [''],
      more: ['']
    });
  }
  
  get f() { 
    return this.contactform.controls; 
  }

  checkBtn() {
    if (this.contactform.invalid) {
      return true;
    }
    return false;
  }

  submit() {
    console.log("form data: ", this.contactform.value);
    this.apiService.sendContactMail(this.contactform.value).subscribe(
      (res) => {
        console.log("response", res);
        if(res.success) {
          this.contactform.reset();
        }
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
