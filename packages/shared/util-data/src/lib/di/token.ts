export class Token<T = unknown> {
  constructor(public name: string | T) {}
}

export function createToken<T>(name: string | T) {
  return new Token(name);
}
