/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { WebReqInterceptorService } from './webReqinterceptor.service';

describe('Service: WebReqinterceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebReqInterceptorService]
    });
  });

  it('should ...', inject([WebReqInterceptorService], (service: WebReqInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
