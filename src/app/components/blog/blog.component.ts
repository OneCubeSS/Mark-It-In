import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Post } from '../blog-create/post';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  data: Post[] = [];
  isLoadingResults = true;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService, private router: Router) { 
  }

  ngOnInit(): void {
    if (!window.location.href.toString().endsWith('index.html')) {
      let id = document.getElementById('headermain') as HTMLElement;
      console.log('tag: ', id);
      if (id.classList.length == 0) {
        id.classList.add('background-header');
      }
    }    
    this.apiService.getPosts().subscribe(
      (res) => {
        console.log('result: ', res);
        this.data = res.data;
        console.log(this.data);
        this.isLoadingResults = false;
      },
      (err) => {
        console.log('error: ', err);
        this.isLoadingResults = false;
      }
    );
  }

}
