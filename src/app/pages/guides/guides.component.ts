import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guides',
  templateUrl: './guides.component.html',
  styleUrls: ['./guides.component.css'],
})
export class GuidesComponent implements OnInit {

  constructor() {
    document.getElementsByClassName("navbar-logo")[0].classList.add("navbar-logo-visible")
    document.getElementsByClassName("navbar-logo-container")[0].classList.add("navbar-logo-container-top")
    document.getElementsByClassName("navbar-list")[0].classList.add("navbar-item-black")
  }

  ngOnInit() {
  }

}
