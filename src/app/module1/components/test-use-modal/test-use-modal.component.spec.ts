import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestUseModalComponent } from './test-use-modal.component';

describe('TestUseModalComponent', () => {
  let component: TestUseModalComponent;
  let fixture: ComponentFixture<TestUseModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestUseModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestUseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
