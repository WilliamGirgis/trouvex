import { TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from './login.component'; // Replace with your component

describe('LoginComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} }, // ✅ Provide MatDialogRef
      ]
    });
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
