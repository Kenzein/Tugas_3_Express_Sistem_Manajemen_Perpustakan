export const isLogin = () => {
  return !!localStorage.getItem("token");
};

export const Logout = () => {
  localStorage.removeItem("token");
};

// export default {
//   isLogin,
//   Logout,
// };
