import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { LayoutService } from '../../services/layout.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { params: of({ id: 123 }) }
        },
        LayoutService
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#toggleMenu should call #layoutService.setToggleMenu', () => {
    const layoutService = TestBed.inject(LayoutService);
    const spy = spyOn(layoutService, 'setToggleMenu');
    component.toggleMenu();
    expect(spy).toHaveBeenCalled();
  });

});
