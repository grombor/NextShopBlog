import UserService from './UserService';

const RefreshTokenService = async () => {
  const refreshToken = UserService.getRefreshToken();
  const response = await axios
    .post(
      `http://46.41.149.166:9090/api/token/refresh?refreshToken=${refreshToken}`,
    )
    .then((response) => {
      if (response?.status === 200){
        UserService.setToken(response.data.data)
        return response?.status
      }
    })
    .catch((error) => {
      console.log(error);
      return null
    });
};

export default RefreshTokenService;
