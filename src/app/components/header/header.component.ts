import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { OpButtonDirective } from '../../../@core/directives/op-button.directive';
import { RouterLink } from '@angular/router';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'op-header',
  standalone: true,
  imports: [
    OpButtonDirective,
    RouterLink,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {  
  readonly #layoutService = inject(LayoutService);

  toggleMenu(): void {
    this.#layoutService.setToggleMenu();
  }
}
