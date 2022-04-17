import { MissingParamError } from '../errors/missing-param-error';
import { SignUpController } from './signup';

describe('SignUp Controller', () => {
  test('Shold return 400 if no name if provided', () => {
    const sut = new SignUpController();

    const httpRequest = {
      body: {
        email: 'any_email@mail.com',
        password: 'any_password',
        Confirmation: 'any_password',
      },
    };

    const httpResponse = sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('name'));
  });

  test('Shold return 400 if no email if provided', () => {
    const sut = new SignUpController();

    const httpRequest = {
      body: {
        name: 'any_name',
        password: 'any_password',
        Confirmation: 'any_password',
      },
    };

    const httpResponse = sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('email'));
  });
});
