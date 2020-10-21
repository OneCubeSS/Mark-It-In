import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Post } from '../../blog-create/post';

@Component({
  selector: 'app-blog-data',
  templateUrl: './blog-data.component.html',
  styleUrls: ['./blog-data.component.css']
})
export class BlogDataComponent implements OnInit {
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
    private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.getPostDetails(this.route.snapshot.params.id);
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

}
