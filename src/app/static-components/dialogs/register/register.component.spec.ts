import { TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { RegisterComponent } from './register.component'; // Replace with your component

describe('MyDialogComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} }, // ✅ Provide MatDialogRef
      ]
    });
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
