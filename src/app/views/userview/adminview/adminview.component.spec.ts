/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AdminviewComponent } from './adminview.component';
import { ActivatedRoute } from '@angular/router';
  TestBed.configureTestingModule({
    providers: [
      { provide: [ActivatedRoute], useValue: {} }, // Mock MatDialogRef globally
    ],
  }).compileComponents();

describe('AdminviewComponent', () => {
  let component: AdminviewComponent;
  let fixture: ComponentFixture<AdminviewComponent>;


  beforeEach(() => {
    fixture = TestBed.createComponent(AdminviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
