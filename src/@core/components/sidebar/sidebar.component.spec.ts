import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a default value of 'left' for position`, () => {
    expect(component.position).toEqual('left');
  });

  it('should have a default value of false for fullscreen', () => {
    expect(component.fullscreen).toEqual(false);
  });

  it('should have a default value of false for visible', () => {
    expect(component.visible).toEqual(false);
  });
});
