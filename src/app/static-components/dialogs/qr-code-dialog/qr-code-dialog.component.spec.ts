import { TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { QrCodeDialogComponent } from './qr-code-dialog.component'; // Replace with your component

describe('QrCodeDialogComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QrCodeDialogComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} }, // ✅ Provide MatDialogRef
      ]
    });
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(QrCodeDialogComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
