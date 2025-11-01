import 'zone.js/testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';



// Initialize Angular test environment
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [HttpClientTestingModule,], // Global modules
    providers: [
      { provide: ActivatedRoute, useValue: {} }, // Mock MatDialogRef globally
      { provide: MatDialogRef, useValue: {} }, // Mock MatDialogRef globally
      { provide: MAT_DIALOG_DATA, useValue: {} }, // Mock MatDialogRef globally


    ],
  }).compileComponents();
});
