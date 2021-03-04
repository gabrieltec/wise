import { httpConfig } from "../core/http.config";
import { home, http } from "../core/http.interceptor";

export class LoginService {
  
  /**
   * login service
   * @param passwordInfo
   */
  public static login( user: { email: string, senha: string} ) {
    return http.post(
      // `login`,
      `2c01c28c-7d07-4c77-9ac4-c0582cfc3b97`,
      user,
      httpConfig.loginService
    );
  }
  
}
