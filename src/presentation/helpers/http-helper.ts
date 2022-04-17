import { ServerError } from '../errors';
import { HttpResponse } from '../protocols';

const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error,
});

const serverError = (): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(),
});

export { badRequest, serverError };
