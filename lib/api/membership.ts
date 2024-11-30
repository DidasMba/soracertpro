/** @format */

import { UserDataInput, UserResponse } from "@/type";
import { API_URL } from "./baseUrl";

export const createMember = async (memberInputs: UserDataInput) => {
    try {
        const formData = new FormData();
        formData.append("firstname", memberInputs.firstname);
        formData.append("lastname", memberInputs.lastname);
        formData.append("gender", memberInputs.gender);
        formData.append("avatar", memberInputs.avatar!);
        formData.append("username", memberInputs.username!);
        formData.append("email", memberInputs.email);
        formData.append("role", "MEMBER");
        formData.append("password", memberInputs.password);
        const response: {
            status: string;
            message: string;
            data: UserResponse;
        } = await fetch(`${API_URL}/auth/register`, {
            method: "POST",
            body: formData,
        }).then((res) => res.json());
        return response;
    } catch (error) {
        console.log(error);
    }
};
