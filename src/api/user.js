import http from "./http";

export const GetUserMenu = async (userId) => {
  return await http.get(`/user/getAllModulesByUserId/${userId}`);
};
