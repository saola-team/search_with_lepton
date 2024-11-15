const accessToken = "jwt_token_key";

export const setAccessToken = (token: string) => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(accessToken, token);
    window.localStorage.setItem("isLoggedIn", "true");
  }
};
export const setLocalStorageLoggedIn = () => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem("isLoggedIn", "true");
  }
};

export const getAccessToken = () =>
  typeof window !== "undefined" ? localStorage.getItem(accessToken) : "";

export const getAuthentication = () =>
  typeof window !== "undefined" ? localStorage.getItem("isLoggedIn") : "";

export const removeAccessToken = () => {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem("isLoggedIn");
    window.localStorage.removeItem(accessToken);
  }
};
