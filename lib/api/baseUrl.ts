/** @format */

export const API_URL = "http://soralearn.com/api/v1";

const TOKEN_NAME = "auth-sora-user-token";

const getInitialToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(TOKEN_NAME);
  }
  return null;
};

export const getLanguage = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("langugae") || "fr";
  }
  return "fr";
};

export const saveTokenToLocalStorage = (token: string) => {
  if (typeof window !== undefined) {
    localStorage.setItem(TOKEN_NAME, token);
  }
};

export const removeTokenFromLocalStorage = () => {
  localStorage.removeItem(TOKEN_NAME);
};

export const token = getInitialToken();
