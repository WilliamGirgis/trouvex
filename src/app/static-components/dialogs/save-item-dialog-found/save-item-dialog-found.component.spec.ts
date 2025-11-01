import { TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { SaveItemDialogComponent } from './save-item-dialog-found.component'; // Replace with your component

describe('SaveItemDialogComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SaveItemDialogComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} }, // ✅ Provide MatDialogRef
      ]
    });
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(SaveItemDialogComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
