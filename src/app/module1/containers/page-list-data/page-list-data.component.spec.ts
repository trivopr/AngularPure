import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListDataComponent } from './page-list-data.component';

describe('PageListDataComponent', () => {
  let component: PageListDataComponent;
  let fixture: ComponentFixture<PageListDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageListDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageListDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
