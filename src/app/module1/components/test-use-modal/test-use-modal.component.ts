import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from '../../../shared/components/modal/modal.component';

@Component({
  selector: 'app-test-use-modal',
  templateUrl: './test-use-modal.component.html',
  styleUrls: ['./test-use-modal.component.css']
})
export class TestUseModalComponent implements OnInit {
  @ViewChild('elModalTest') elModalTest: ModalComponent;

  constructor() { }

  ngOnInit() {
  }

  triggerModalShow() {
    this.elModalTest.show();
  }

}
