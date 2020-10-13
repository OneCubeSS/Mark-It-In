import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whatwedo',
  templateUrl: './whatwedo.component.html',
  styleUrls: ['./whatwedo.component.css']
})
export class WhatwedoComponent implements OnInit {

  constructor() { 
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
