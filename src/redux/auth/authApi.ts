import { loginPostEndpoint } from "services/api/endpoints";
import { login, logout } from "./authSlice";

export const checkIsLogged = (user: any, expirationTime: number) => {
  return async (dispatch: any) => {
    let currentTime = new Date().getTime();
    let exp = new Date(+expirationTime).getTime();
    let remainingTime = exp - currentTime;

    if (remainingTime <= 60000) {
      dispatch(logout());
    }

    if (remainingTime > 60000) {
      const { data } = await loginPostEndpoint("login/admin/", user);
      dispatch(
        login({
          token: data,
          expirationTime: expirationTime,
        })
      );
    }
  };
};
