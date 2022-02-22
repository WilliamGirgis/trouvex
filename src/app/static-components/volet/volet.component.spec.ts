/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VoletComponent } from './volet.component';

describe('VoletComponent', () => {
  let component: VoletComponent;
  let fixture: ComponentFixture<VoletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
