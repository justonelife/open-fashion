import { Directive, HostBinding, Input, inject } from '@angular/core';
import { ButtonIconPosition, ButtonSize, ButtonStatus } from '../consts/op-button.const';
import { StatusService } from '../services/status-service.service';

@Directive({
  selector: '[opButton]',
  standalone: true,
  providers: [StatusService],
  host: {
    'class': 'uppercase'
  }
})
export class OpButtonDirective {
  readonly statusService = inject(StatusService);

  @Input() iconPos: ButtonIconPosition = 'left';
  @Input() status: ButtonStatus = 'primary';
  @Input() size: ButtonSize = 'small';

  readonly SIZE_TO_CLASS: Record<ButtonSize, string[]> = {
    small: ['py-2', 'px-[30px]'],
    medium: ['py-[12px]', 'px-[33px]'],
    large: ['py-4', 'w-full']
  };

  @HostBinding('class')
  get classes(): string[] {
    return [
      ...this.statusService.getButtonClassByStatus(this.status),
      ...this.SIZE_TO_CLASS[this.size]
    ];
  } 
}
