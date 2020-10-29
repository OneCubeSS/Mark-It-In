import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor() {
    console.log("location: ", window.location.href);
   }

  ngOnInit(): void {
    if(window.location.href.toString().endsWith("contactus")) {
      let id = document.getElementById("headermain") as HTMLElement;
      console.log("tag: ", id);
      if(id.classList.length == 0) {   
        id.classList.add("background-header");
      }
    }
  }

}
