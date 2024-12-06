/** @format */

import {
    ApiCreateProgramResponse,
    TProgram,
    TProgramParticipantInput,
    TProgramParticipantResponse,
} from "@/type";
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

export const addParticipantToProgram = async (
    inputs: TProgramParticipantInput
) => {
    try {
        const response: ApiCreateProgramResponse = await fetch(
            `${API_URL}/program/participant/add`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    userId: inputs.userId,
                    programId: inputs.programId,
                }),
                credentials: "include",
            }
        ).then((res) => res.json());
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const getParticipantByProgramId = async (id: number) => {
    try {
        const participants: TProgramParticipantResponse = await fetch(
            `${API_URL}/program/participant/program/${id}`,
            {
                method: "GET",
                credentials: "include",
            }
        ).then((res) => res.json());
        return participants;
    } catch (error) {
        console.log(error);
    }
};
