/** @format */

import { PatnerDataInput, } from "@/type";
import { API_URL } from "./baseUrl";

export const createParner = async (partnerInputs: PatnerDataInput) => {
    try {
        const formData = new FormData();
        formData.append("firstname", partnerInputs.firstname);
        formData.append("lastname", partnerInputs.lastname);
      
        formData.append("logo", partnerInputs.logo!);
        formData.append("company", partnerInputs.company!);
        formData.append("email", partnerInputs.email);
      
        formData.append("description", partnerInputs.description);
        const response: {
            status: string;
            message: string;
            data: any;
        } = await fetch(`${API_URL}/sponsor/demand/send`, {
            method: "POST",
            body: formData,
        }).then((res) => res.json());
        return response;
    } catch (error) {
        console.log(error);
    }
};
