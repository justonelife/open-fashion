import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OpButtonDirective } from './op-button.directive';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { StatusService } from '../services/status-service.service';

@Component({
  template: `<button opButton>small + primary</button>`
})
class SmallAndPrimaryButtonComponent {
}

@Component({
  template: `
    <button opButton 
      icon="search" 
      iconPos="right"
      size="medium">
    </button>
  `
})
class IconButtonComponent {
}


describe('OpButtonDirective', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        OpButtonDirective
      ],
      providers: [StatusService],
      declarations: [
        SmallAndPrimaryButtonComponent,
        IconButtonComponent,
      ]
    })
  });

  function createHelper<T>(componentType: any): ({ 
    fixture: ComponentFixture<T>,
    component: T,
    buttonEl: DebugElement
  }) {
    let component: T;
    let fixture: ComponentFixture<T>;
    let buttonEl: DebugElement;

    fixture = TestBed.createComponent(componentType);
    component = fixture.componentInstance;
    buttonEl = fixture.debugElement.query(By.css('button'));

    return { fixture, component, buttonEl };
  }

  it('should render proper small + primary button', () => {
    const { fixture, buttonEl } = createHelper(SmallAndPrimaryButtonComponent);

    fixture.detectChanges();
    expect(buttonEl.nativeElement.classList).toContain('bg-black');
    expect(buttonEl.nativeElement.classList).toContain('text-white-900');
    expect(buttonEl.nativeElement.classList).toContain('py-2');
    expect(buttonEl.nativeElement.classList).toContain('px-[30px]');
  });
  
  it('should render proper icon', () => {
    const { fixture, buttonEl } = createHelper(IconButtonComponent);

    fixture.detectChanges();
    const icon = buttonEl.childNodes[0].nativeNode;
    expect(icon.classList).toContain('material-symbols-outlined');
    expect(icon.innerText).toEqual(buttonEl.attributes['icon']);
    expect(buttonEl.nativeElement.classList).toContain('flex-row');
    expect(buttonEl.nativeElement.classList).toContain('gap-4');
  });
});
