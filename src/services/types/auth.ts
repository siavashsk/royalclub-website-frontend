export interface IAuth {
  token: string | null;
  isLogged: boolean;
  expirationTime: null | any;
}
export interface IValues {
  username: string;
  password: string;
}

export interface ISignupValues {
  email: string;
  username: string;
  password: string;
}
