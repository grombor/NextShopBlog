const setUser = (values) => {
  localStorage.setItem('abes-role', values.role);
  localStorage.setItem('abes-token', values.token);
  localStorage.setItem('abes-refreshToken', values.refreshToken);
};

const getRole = () => {
  if (typeof window !== 'undefined') {
    const role = localStorage.getItem('abes-role')
    return role
  }
}

const getToken = () => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('abes-token');
    return token
  }
}

const setToken = (values) => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('abes-token');
    localStorage.removeItem('abes-refreshToken');
    localStorage.setItem('abes-token', values.token);
    localStorage.setItem('abes-refreshToken', values.refreshToken);
  }
}

const getRefreshToken = () => {
  if (typeof window !== 'undefined') {
    const refreshToken = localStorage.getItem('abes-refreshToken')
    return refreshToken
  }
}

const checkUser = () => {
  if (typeof window !== 'undefined') {
    try {
      const role = localStorage.getItem('abes-role');
      if (role?.length > 0) {
        return true
      }
    } catch (error) {
      return false
    }
  }
}

const logout = () => {
  localStorage.removeItem('abes-role');
  localStorage.removeItem('abes-token');
  localStorage.removeItem('abes-refreshToken');
}

const userIsActive = () => {
  return localStorage.getItem('abes-token') !== null;

}


const UserService = {
  setUser,
  getRole,
  getToken,
  setToken,
  getRefreshToken,
  checkUser,
  logout,
  userIsActive
};

export default UserService;
  