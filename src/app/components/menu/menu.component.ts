import { Component, inject } from '@angular/core';
import { SidebarComponent } from '../../../@core/components/sidebar/sidebar.component';
import { LayoutService } from '../../services/layout.service';
import { AsyncPipe, NgIf } from '@angular/common';
import { OpButtonDirective } from '../../../@core/directives/op-button.directive';

@Component({
  selector: 'op-menu',
  standalone: true,
  imports: [
    SidebarComponent,
    AsyncPipe,
    NgIf,
    OpButtonDirective,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  readonly layoutService = inject(LayoutService);
}
