import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { DialogueFormComponent } from '../dialogue-form/dialogue-form.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  showToggle: boolean;
  ipInformation: any = {};

  constructor(private apiService: ApiService, private matDialog: MatDialog) {}

  ngOnInit(): void {
    localStorage.removeItem('access_token');
    this.getIpInformation();
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
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result.event}`);
    //   if (result && result.event == "success") {
    //     //this.getEmployeeData();
    //   }
    // });
  }
}
