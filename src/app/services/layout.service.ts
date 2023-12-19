import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, distinctUntilChanged } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  #toggleMenu: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  toggleMenu$: Observable<boolean> = this.#toggleMenu.asObservable();

  getToggleMenu(): Observable<boolean> {
    return this.toggleMenu$
      .pipe(
        distinctUntilChanged()
      );
  }

  setToggleMenu(value?: boolean): void {
    if (typeof value === 'boolean') {
      this.#toggleMenu.next(value);
    } else {
      this.#toggleMenu.next(!this.#toggleMenu.value);
    }
  } 
}
