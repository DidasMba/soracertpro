/** @format */

import { cookies } from "next/headers";

export const getCcookie = () => {
    const token = cookies().get("jwt")?.value;
    return token ? true : false;
};
