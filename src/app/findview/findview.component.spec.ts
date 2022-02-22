import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindviewComponent } from './findview.component';

describe('FindviewComponent', () => {
  let component: FindviewComponent;
  let fixture: ComponentFixture<FindviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
