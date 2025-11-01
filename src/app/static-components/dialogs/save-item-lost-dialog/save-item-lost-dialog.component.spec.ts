import { TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { SaveItemLostDialogComponent } from './save-item-lost-dialog.component'; // Replace with your component

describe('MyDialogComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],imports:[SaveItemLostDialogComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} }, // ✅ Provide MatDialogRef
      ]
    });
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(SaveItemLostDialogComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
