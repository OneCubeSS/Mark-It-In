import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-casestudies',
  templateUrl: './casestudies.component.html',
  styleUrls: ['./casestudies.component.css']
})
export class CasestudiesComponent implements OnInit {

  constructor() { 
    console.log("location: ", window.location.href);
  }

  ngOnInit(): void {
    if(!window.location.href.toString().endsWith("index.html")) {
      let id = document.getElementById("headermain") as HTMLElement;
      console.log("tag: ", id);
      if(id.classList.length == 0) {   
        id.classList.add("background-header");
      }
    }
  }

}
