import { TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { ClientMapComponent } from './client-map.component'; // Replace with your component

describe('MyDialogComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],imports:[ClientMapComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} }, // ✅ Provide MatDialogRef
      ]
    });
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ClientMapComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
