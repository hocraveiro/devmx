import { BehaviorSubject, distinctUntilChanged, map, Observable } from 'rxjs';
import { isHttpError } from '../utils';

export abstract class Facade<T> {
  #state: BehaviorSubject<T>;
  protected state$: Observable<T>;

  #error: BehaviorSubject<string | null>;
  error$: Observable<string | null>;

  constructor(initialValue: T) {
    const state = Object.freeze(initialValue);
    this.#state = new BehaviorSubject(state);
    this.state$ = this.#state.asObservable();

    this.#error = new BehaviorSubject<string | null>(null);
    this.error$ = this.#error.asObservable();
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

  protected emitError = <E>(err: Error, caught: Observable<E>) => {
    if (err) {
      if (isHttpError(err)) {
        const message = err.error.message;
        this.#error.next(message);
      }

      throw err;
    }

    return caught;
  };
}
