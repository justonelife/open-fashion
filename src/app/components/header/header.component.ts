import { ChangeDetectionStrategy, Component } from '@angular/core';
import { OpButtonDirective } from '../../../@core/directives/op-button.directive';
import { RouterLink } from '@angular/router';

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

}
