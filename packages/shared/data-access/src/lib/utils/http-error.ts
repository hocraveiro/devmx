export abstract class HttpError {
  readonly name = 'HttpErrorResponse';

  abstract error: Error;
}

export const isHttpError = (err: { name: string }): err is HttpError => {
  return err.name === 'HttpErrorResponse';
};
