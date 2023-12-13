import { AfterViewInit, Directive, ElementRef, HostBinding, Input, Renderer2, inject } from '@angular/core';
import { ButtonIconPosition, ButtonSize, ButtonStatus } from '../consts/op-button.const';
import { StatusService } from '../services/status-service.service';

@Directive({
  selector: '[opButton]',
  standalone: true,
  providers: [StatusService],
  host: {
    'class': 'uppercase flex items-center justify-center'
  }
})
export class OpButtonDirective implements AfterViewInit {
  readonly #statusService = inject(StatusService);
  readonly #renderer = inject(Renderer2);
  readonly #elementRef = inject(ElementRef);

  @Input() iconPos: ButtonIconPosition = 'left';
  @Input() icon?: string;
  @Input() status: ButtonStatus = 'primary';
  @Input() size: ButtonSize = 'small';

  readonly SIZE_TO_CLASS: Record<ButtonSize, string[]> = {
    small: ['py-2', 'px-[30px]'],
    medium: ['py-[12px]', 'px-[33px]'],
    large: ['py-4', 'w-full']
  };
  #label?: string;

  @HostBinding('class')
  get classes(): string[] {
    return [
      ...this.#statusService.getButtonClassByStatus(this.status),
      ...this.#getPaddings()
    ];
  } 

  ngAfterViewInit(): void {
    this.#getLabel();
    this.#createIcon();
  }

  #getLabel(): void {
    this.#label = this.#elementRef.nativeElement.innerText;
  }

  #createIcon(): void {
    if (!this.icon) return;
    const span = this.#renderer.createElement('span');
    this.#addClassToElement(span, ['material-symbols-outlined']);
    

    // GAP BY SIZE
    if (this.size === 'small') {
      this.#addClassToElement(this.#elementRef.nativeElement, ['gap-2']);
    } else if (this.size === 'medium') {
      this.#addClassToElement(this.#elementRef.nativeElement, ['gap-4']);
    } else if (this.size === 'large') {
      this.#addClassToElement(this.#elementRef.nativeElement, ['gap-6']);
    }

    // POSITION BY ICON POS
    if (this.iconPos === 'left') {
      this.#addClassToElement(this.#elementRef.nativeElement, ['flex-row-reverse']);
    } else {
      this.#addClassToElement(this.#elementRef.nativeElement, ['flex-row']);
    }

    this.#renderer.setAttribute(span, 'aria-hidden', 'true');
    this.#renderer.setProperty(span, 'innerText', this.icon);
    this.#renderer.appendChild(this.#elementRef.nativeElement, span);
  }

  #addClassToElement(el: ElementRef, klasses: string[]): void {
    for (const klass of klasses) {
      this.#renderer.addClass(el, klass);
    }
  }

  #getPaddings(): string[] {
    if (!this.#label && this.icon) {
      // Icon Only
      return ['p-2'];
    } else {
      return this.SIZE_TO_CLASS[this.size];
    }
  }
}
