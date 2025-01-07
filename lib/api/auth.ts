/** @format */

import { ApiUserResponse } from "@/type";
import { API_URL, token } from "./baseUrl";

type TSignInput = {
  email: string;
  password: string;
};

export const signinFn = async (SignInput: TSignInput) => {
  try {
    const response: {
      status: string;
      message: string;
      error_message: string;
      data: { access_token: string };
    } = await fetch(`${API_URL}/auth/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: SignInput.email,
        password: SignInput.password,
      }),
    }).then((res) => res.json());
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getUserProfile = async () => {
  try {
    const response: ApiUserResponse = await fetch(`${API_URL}/user/profile`, {
      method: "GET",
      headers: { authorization: `Bearer ${token}` },
    }).then((res) => res.json());
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const signOut = async () => {
  try {
    const response: { status: string; message: string } = await fetch(
      `${API_URL}/auth/signout`,
      {
        method: "POST",
      }
    ).then((res) => res.json());
    return response;
  } catch (error) {
    console.log(error);
  }
};
