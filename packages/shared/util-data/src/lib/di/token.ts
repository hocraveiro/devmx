export class Token<T = unknown> {
  constructor(public readonly name: string | T) {}
}
