import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guides',
  templateUrl: './guides.component.html',
  styleUrls: ['./guides.component.css'],
})
export class GuidesComponent implements OnInit {

  constructor() {
    document.getElementsByClassName("navbar-logo")[0].classList.add("navbar-logo-visible")
  }

  ngOnInit() {
  }

}
