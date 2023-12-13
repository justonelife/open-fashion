import { Injectable } from '@angular/core';
import { ButtonStatus } from '../consts/op-button.const';

@Injectable()
export class StatusService {
  readonly #STATUS_TO_CLASS: Record<ButtonStatus, string[]> = {
    'primary': ['bg-black', 'text-white-900'],
    'secondary': ['bg-transparent', 'text-black'],
    'danger': ['bg-red-500', 'text-white-900'],
    'warning': ['bg-yellow-500', 'text-white-900'],
    'success': ['bg-green-500', 'text-white-900'],
  };

  getButtonClassByStatus(status: ButtonStatus): string[] {
    return this.#STATUS_TO_CLASS[status];
  }
}
