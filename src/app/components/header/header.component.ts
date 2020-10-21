import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogueFormComponent } from '../dialogue-form/dialogue-form.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private matDialog: MatDialog) {}

  ngOnInit(): void {}

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

  remove() {
    let id = document.getElementById('navbarResponsive') as HTMLElement;
    if (id.classList.contains('show')) {
      id.classList.remove('show');
    }
  }

  navigateToSection(section: string) {
    this.remove();
    window.location.hash = '';
    window.location.hash = section;
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
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result.event}`);
    //   if (result && result.event == "success") {
    //     //this.getEmployeeData();
    //   }
    // });
  }
}
