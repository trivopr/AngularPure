import { Component, OnInit, ViewChild } from '@angular/core';
import { TestUseModalComponent } from '../test-use-modal/test-use-modal.component';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})
export class FormDataComponent implements OnInit {
  @ViewChild('elTestModal') elTestModal: TestUseModalComponent;
  constructor() { }

  ngOnInit() {
  }

  clickToShowModal(e) {
    e.preventDefault();
    this.elTestModal.triggerModalShow();
  }

}
