import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  showToggle: boolean;
  ipInformation: any = {};

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    localStorage.removeItem('access_token');
    this.getIpInformation();
  }

  checkValue(event: any){
    console.log("value:", event.currentTarget.checked);    
    let on = document.getElementById("toggle_On");
    let off = document.getElementById("toggle_Off");
    if(event.currentTarget.checked) {
      on.style.display = "flex";
      off.style.display = "none";
    } else {
      off.style.display = "flex";
      on.style.display = "none";
    }
 }

 getIpInformation() {
  this.apiService.getIpInformation()
    .subscribe(data => {
      this.ipInformation = data;
      console.log(this.ipInformation);
    });
 }
}
