import UserService from './UserService';
import RefreshTokenService from './RefreshTokenService';
import axiosWithAuth from "../axios-config";

class AuthService {
  async login(values) {
    return axiosWithAuth.post(process.env.NEXT_PUBLIC_API_URL +'/api/token', {
        email: values.email,
        password: values.password,
      })
      .then(function (response) {
        if (response?.status === 200) {
          UserService.setUser(response?.data.data);
          // setTimeout(() => {
          //   router.push('/');
          // }, 2500);
          return response;
        }
      })
      .catch(function (error) {
        console.log(error.response?.data);
        if (error.response?.status == 401) {
          RefreshTokenService();
          console.log(error.response?.status);
          return Promise.reject(error);
        } else {
          console.log(error.response?.status);
          return Promise.reject(error);
        }
      });
  }

  logout() {
    UserService.logout();
  }

  refresh() {
    const response = axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL +'/api/sec/always-no-auth')
      .then(
        (response) => {
          if (response.status === 200) {
            return 200;
          }
        },
        (error) => {
          if (error?.response.status == 401) {
            const refreshStatus = RefreshTokenService();
            console.log('RefreshTokenService');
          } else {
            console.log(error);
            return Promise.reject(error);
          }
        }
      );
  }

  getCurrentUser() {
    return UserService.getCurrentUser();
  }
}

export default new AuthService();
