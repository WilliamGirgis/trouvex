import { TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { WelcomeDialogComponent } from './welcome-dialog.component'; // Replace with your component

describe('MyDialogComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeDialogComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} }, // ✅ Provide MatDialogRef
      ]
    });
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(WelcomeDialogComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
