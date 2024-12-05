/** @format */

import { API_URL } from "./baseUrl";

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
        } = await fetch(`${API_URL}/auth/signin`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: SignInput.email,
                password: SignInput.password,
            }),
            credentials: "include",
        }).then((res) => res.json());
        return response;
    } catch (error) {
        console.log(error);
    }
};