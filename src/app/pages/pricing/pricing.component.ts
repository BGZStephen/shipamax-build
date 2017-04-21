import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css'],
})
export class PricingComponent implements OnInit {

  constructor() {
    document.getElementsByClassName("navbar-logo")[0].classList.add("navbar-logo-visible")
  }

  ngOnInit() {
  }

}
