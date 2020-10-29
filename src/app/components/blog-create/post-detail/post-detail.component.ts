import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Post } from '../post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
})
export class PostDetailComponent implements OnInit {
  post: Post = {
    category: '',
    _id: '',
    postTitle: '',
    postAuthor: '',
    postDesc: '',
    postContent: '',
    postReference: '',
    postImgUrl: '',
    created: null,
    updated: null,
  };
  isLoadingResults = true;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {    
    if(!this.isLoggedIn()) {
      this.router.navigate(['adminLogin']);
    } 
    this.getPostDetails(this.route.snapshot.params.id);
  }

  isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }

  getPostDetails(id: any) {
    this.apiService.getPost(id).subscribe(
      (res) => {
        console.log('result: ', res);
        this.post = res.data;
        this.post._id = res.data._id;
        console.log(this.post);
        this.isLoadingResults = false;
      },
      (err) => {
        console.log('error: ', err);
        this.isLoadingResults = false;
      }
    );
  }

  deletePost(id: any) {
    this.isLoadingResults = true;
    this.apiService.deletePost(id).subscribe(
      (res) => {
        this.isLoadingResults = false;
        this.router.navigate(['/blogposts']);
      },
      (err) => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
  }
}
