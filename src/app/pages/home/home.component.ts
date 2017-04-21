import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor() {
    document.getElementsByClassName("navbar-logo")[0].classList.remove("navbar-logo-visible")
    document.getElementsByClassName("navbar-logo-container")[0].classList.remove("navbar-logo-container-top")
    document.getElementsByClassName("navbar-list")[0].classList.remove("navbar-item-black")
  }

  ngOnInit() {
  }

}
