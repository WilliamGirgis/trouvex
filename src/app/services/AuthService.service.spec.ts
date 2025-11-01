import { TestBed } from '@angular/core/testing';
import { AuthService } from './AuthService.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // ✅ Add this
      providers: [AuthService]
    });
  });

  it('should be created', () => {
    const service: AuthService = TestBed.inject(AuthService);
    expect(service).toBeTruthy();
  });
});
