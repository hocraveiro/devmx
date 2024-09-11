import { BehaviorSubject, distinctUntilChanged, map, Observable } from 'rxjs';

export abstract class Facade<T> {
  #state: BehaviorSubject<T>;

  protected state$: Observable<T>;

  constructor(initialValue: T) {
    const state = Object.freeze(initialValue);
    this.#state = new BehaviorSubject(state);
    this.state$ = this.#state.asObservable();
  }

  protected select<K>(mapFn: (state: T) => K) {
    return this.state$.pipe(
      map((state) => mapFn(state)),
      distinctUntilChanged()
    );
  }

  protected setState(newState: Partial<T>) {
    this.#state.next({ ...this.#state.value, ...newState });
  }
}
