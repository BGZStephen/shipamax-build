import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  modalVisible: boolean = false;

  constructor() {  }

  toggleModal() {
    if(this.modalVisible) {
      return {"visibility": "visible", "opacity": "1"}
    } else {
      return {"visibility": "hidden", "opacity": "0"}
    }
  }

  ngOnInit() {
  }
}
