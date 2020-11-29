import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogueFormComponent } from '../dialogue-form/dialogue-form.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent implements OnInit {

  imgValue = true;
  
  @HostListener('window:scroll') onScroll(e: Event): void {
    this.getImg();
 }

  constructor(private router: Router, private matDialog: MatDialog) {}

  ngOnInit(): void {
    this.getImg();
  }

  isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }

  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['adminlogin']);
    }
  }

  getImg() {
    let id = document.getElementById('headermain') as HTMLElement
    if (id.classList.contains('background-header') || !window.location.href.toString().endsWith("index.html")) {
      this.imgValue = false;
    }
    else {
      this.imgValue = true;
    }
  }

  remove() {
    let id = document.getElementById('navbarResponsive') as HTMLElement;
    if (id.classList.contains('show')) {
      id.classList.remove('show');
    }
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
    dialogRef = this.matDialog.open(DialogueFormComponent, dialogConfig);
  }
}
