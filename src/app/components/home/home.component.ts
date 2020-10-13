import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  showToggle: boolean;

  constructor() { }

  ngOnInit(): void {

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
}
