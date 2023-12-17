import { animate, animation, style, transition, trigger, useAnimation } from '@angular/animations';
import { NgClass, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

const showAnimation = animation([style({ transform: '{{ transform }}' }), animate('{{ transition }}')]);
const hideAnimation = animation([animate('{{ transition }}'), style({ transform: '{{ transform }}' })]);

@Component({
  selector: 'op-sidebar',
  standalone: true,
  imports: [
    NgIf,
    NgClass,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('panelState', [
      transition('visible => void', [
        useAnimation(hideAnimation)
      ]),
      transition('void => visible', [
        useAnimation(showAnimation)
      ])
    ])
  ]
})
export class SidebarComponent {

  @Input() visible: boolean = false;
  
  #position: SidebarPosition = 'left';
  @Input() get position(): SidebarPosition {
    return this.#position;
  }
  set position(value: SidebarPosition) {
    this.#position = value;

    switch (value) {
      case 'left':
        this.transform = 'translate3d(-100%, 0px, 0px)';
        break;
      case 'right':
        this.transform = 'translate3d(100%, 0px, 0px)';
        break;
      case 'bottom':
        this.transform = 'translate3d(0px, 100%, 0px)';
        break;
      case 'top':
        this.transform = 'translate3d(0px, -100%, 0px)';
        break;
    }
  }

  @Input() fullscreen: boolean = false;

  transform: string = 'translate3d(-100%, 0px, 0px)';
  transition: string = '150ms cubic-bezier(0, 0, 0.2, 1)';

}

type SidebarPosition = 'left' | 'right' | 'top' | 'bottom'; 