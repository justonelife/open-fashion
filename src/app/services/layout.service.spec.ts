import { TestBed } from '@angular/core/testing';

import { LayoutService } from './layout.service';

describe('LayoutService', () => {
  let service: LayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an Observable<boolean>', () => {
    service.getToggleMenu().subscribe((value) => {
      expect(typeof value).toBe('boolean');
    });
  });

  it('should return default value of false', () => {
    service.getToggleMenu().subscribe((value) => {
      expect(value).toBe(false);
    });
  });

  it('should return true when setToggleMenu() is called with true', () => {
    service.setToggleMenu(true);
    service.getToggleMenu().subscribe((value) => {
      expect(value).toBe(true);
    });
  });

  it('should return false when setToggleMenu() is called with false', () => {
    service.setToggleMenu(false);
    service.getToggleMenu().subscribe((value) => {
      expect(value).toBe(false);
    });
  });

  it('should return true when setToggleMenu() is called with no value', () => {
    service.setToggleMenu();
    service.getToggleMenu().subscribe((value) => {
      expect(value).toBe(true);
    });
  });
  
});
