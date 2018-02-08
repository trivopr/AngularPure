import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {
  public visible: boolean;
  public visibleAnimate: boolean;

  constructor() { }

  ngOnInit() {
    console.log('ngOnInit modal');
    this.visible = false;
    this.visibleAnimate = true;
  }

  public show(): void {
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true, 100);
  }

  public hide(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }

  ngOnDestroy() {
    this.visible = false;
    this.visibleAnimate = true;
  }

  public onContainerClicked(event: MouseEvent): void {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.hide();
    }
  }
}
