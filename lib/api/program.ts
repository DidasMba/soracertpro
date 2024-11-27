/** @format */

import { TProgram } from "@/type";
import { API_URL } from "./baseUrl";

export const fetchAllProgram = async (
    date: string,
    category: string,
    location: string
) => {
    try {
        const programs: {
            status: string;
            message: string;
            data: Array<TProgram>;
        } = await fetch(
            `${API_URL}/program/all/launched?date=${date}&category=${category}&location=${location}`
        ).then((res) => res.json());
        return programs;
    } catch (error) {
        console.log(error);
    }
};

export const getProgramBySlug = async (slug: string) => {
    try {
        const program: {
            status: string;
            message: string;
            data: TProgram;
        } = await fetch(`${API_URL}/program/slug/${slug}`).then((res) =>
            res.json()
        );
        return program;
    } catch (error) {
        console.log(error);
    }
};
