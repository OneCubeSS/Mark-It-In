import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { DialogueFormComponent } from '../dialogue-form/dialogue-form.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../blog-create/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  showToggle: boolean;
  ipInformation: any = {};  
  data1: Post[] = [];
  data2: Post[] = [];
  data3: Post[] = [];
  isLoadingResults = true;
  fragment;

  constructor(private apiService: ApiService, private matDialog: MatDialog,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    localStorage.removeItem('access_token');
    this.getIpInformation();
    this.getRecentPost();
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
  }

  ngAfterViewChecked(): void {
    try {
        if(this.fragment) {
            document.querySelector("#" + this.fragment).scrollIntoView();
        }
    } catch (e) { }
  }

  checkdata(data) {
    if(data.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  getRecentPost() {
    this.apiService.getRecentPosts(1).subscribe(
      (res) => {
        console.log('result: ', res);
        this.data1 = res.data;
        this.isLoadingResults = false;
      },
      (err) => {
        console.log('error: ', err);
        this.isLoadingResults = false;
      }
    );

    this.apiService.getRecentPosts(2).subscribe(
      (res) => {
        console.log('result: ', res);
        this.data2 = res.data;
        this.isLoadingResults = false;
      },
      (err) => {
        console.log('error: ', err);
        this.isLoadingResults = false;
      }
    );

    this.apiService.getRecentPosts(3).subscribe(
      (res) => {
        console.log('result: ', res);
        this.data3 = res.data;
        this.isLoadingResults = false;
      },
      (err) => {
        console.log('error: ', err);
        this.isLoadingResults = false;
      }
    );
  }

  checkValue(event: any) {
    console.log('value:', event.currentTarget.checked);
    let on = document.getElementById('toggle_On');
    let off = document.getElementById('toggle_Off');
    if (event.currentTarget.checked) {
      on.style.display = 'flex';
      off.style.display = 'none';
    } else {
      off.style.display = 'flex';
      on.style.display = 'none';
    }
  }

  getIpInformation() {
    this.apiService.getIpInformation().subscribe((data) => {
      this.ipInformation = data;
      console.log(this.ipInformation);
    });
  }

  openDialog(type) {
    var params = {};
    params['type'] = type;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {};
    let dialogRef;
    if (type === 'intouch') {
      //console.log("Adding User");
      dialogConfig.data.type = type;
    }
    if (type === 'consultation') {
      //console.log("Uploading Users List");
      dialogConfig.data.type = type;
    }
    dialogRef = this.matDialog.open(DialogueFormComponent, dialogConfig);
  }
}
