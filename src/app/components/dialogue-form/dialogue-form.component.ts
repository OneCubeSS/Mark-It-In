import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-dialogue-form',
  templateUrl: './dialogue-form.component.html',
  styleUrls: ['./dialogue-form.component.css'],
})
export class DialogueFormComponent implements OnInit {
  ctaForm: FormGroup;
  success = false;
  failure = false;
  inTouch = false;
  output = false;
  submitted = false;
  mobileno = "^((\\+91-?)|0)?[0-9]{10}$"; 
  emailrex = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  successResponse = "";
  failureResponse = "";

  constructor(private formBuilder: FormBuilder,
    private apiService: ApiService,
    public dialogRef: MatDialogRef<DialogueFormComponent>,
    @Inject(MAT_DIALOG_DATA) config
  ) {
    if (config.type == 'intouch') {
      this.inTouch = true;
    } else if (config.type == 'consultation') {
      this.inTouch = false;
    }
  }

  ngOnInit(): void {
    //form
    this.ctaForm = this.formBuilder.group({
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
    return this.ctaForm.controls; 
  }

  checkBtn() {
    if (this.ctaForm.invalid) {
      return true;
    }
    return false;
  }

  submit() {
    console.log("form data: ", this.ctaForm.value);
    this.apiService.sendctaMail(this.ctaForm.value).subscribe(
      (res) => {
        console.log("response", res);
        if(res.success) {
          this.ctaForm.reset();
          this.output = true;
          this.success = true
          this.successResponse = "Thank you for contacting us. \n We will get back to you soon...!!"
        }
      },
      (err: any) => {
        this.output = true;
        this.failure = true;
        this.failureResponse = "Sorry some technical error. Please try again."
        console.log(err);
      }
    );
  }

  close() {
    // send event saying sucess or failure
    this.dialogRef.close({ event: 'success' });
  }

  cancel() {
    this.dialogRef.close({ event: 'close' });
  }
}
