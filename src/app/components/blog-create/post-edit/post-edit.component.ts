import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  FormControl,
  FormGroupDirective,
  FormBuilder,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
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
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css'],
})
export class PostEditComponent implements OnInit {
  postForm: FormGroup;
  category = '';
  _id = '';
  postTitle = '';
  postAuthor = '';
  postDesc = '';
  postContent = '';
  postReference = '';
  postImgUrl = '';
  updated: Date = null;
  isLoadingResults = false;
  matcher = new MyErrorStateMatcher();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    //this.setEditorConfig();
    this.getPost(this.route.snapshot.params.id);
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

  getPost(id: any) {
    this.apiService.getPost(id).subscribe((res) => {
      this._id = res.data._id;
      this.postForm.setValue({
        category: res.data.category,
        postTitle: res.data.postTitle,
        postAuthor: res.data.postAuthor,
        postDesc: res.data.postDesc,
        postContent: res.data.postContent,
        postReference: res.data.postReference,
        postImgUrl: res.data.postImgUrl,
      });
    });
  }

  onFormSubmit() {
    this.isLoadingResults = true;
    console.log('PostData :', this.postForm.value);
    this.apiService.updatePost(this._id, this.postForm.value).subscribe(
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

  postDetails() {
    this.router.navigate(['/blogposts/details', this._id]);
  }
}
