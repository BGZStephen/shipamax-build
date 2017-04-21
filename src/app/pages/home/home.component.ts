import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor() {
    document.getElementsByClassName("navbar-logo")[0].classList.remove("navbar-logo-visible")
  }

  ngOnInit() {
  }

}
