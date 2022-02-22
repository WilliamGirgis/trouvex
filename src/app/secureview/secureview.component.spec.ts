import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecureviewComponent } from './secureview.component';

describe('SecureviewComponent', () => {
  let component: SecureviewComponent;
  let fixture: ComponentFixture<SecureviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecureviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecureviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
