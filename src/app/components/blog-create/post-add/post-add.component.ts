import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material/core';
import {
  FormControl,
  FormGroupDirective,
  FormBuilder,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { ApiService } from 'src/app/api.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css'],
})
export class PostAddComponent implements OnInit {
  postForm: FormGroup;
  category = '';
  postTitle = '';
  postAuthor = '';
  postDesc = '';
  postContent = '';
  postReference = '';
  postImgUrl = '';
  isLoadingResults = false;
  matcher = new MyErrorStateMatcher();

  constructor(
    private router: Router,
    private apiService: ApiService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.postForm = this.formBuilder.group({
      category: [null, Validators.required],
      postTitle: [null, Validators.required],
      postAuthor: [null, Validators.required],
      postDesc: [null, Validators.required],
      postContent: [null, Validators.required],
      postReference: [null, Validators.required],
      postImgUrl: [null, Validators.required],
    });
  }

  onFormSubmit() {
    this.isLoadingResults = true;
    this.apiService.addPost(this.postForm.value).subscribe(
      (res) => {
        const id = res.data._id;
        this.isLoadingResults = false;
        this.router.navigate(['/blogposts/details', id]);
      },
      (err: any) => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
  }
}
