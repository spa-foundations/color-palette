import { TestBed } from '@angular/core/testing';

import { ChromaService } from './chroma.service';

describe('ChromaService', () => {
  let service: ChromaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChromaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
