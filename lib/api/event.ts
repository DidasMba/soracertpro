/** @format */

import { Event } from "@/type";

const API_URL = "http://localhost:8080/api/v1";

export const getAllEvents = async () => {
    try {
        const events: { status: string; message: string; data: Array<Event> } =
            await fetch(`${API_URL}/event/published`).then((res) => res.json());
        return events;
    } catch (error) {
        console.log(error);
    }
};

export const getEventBySlug = async (id: string) => {
    try {
        const event: { status: string; message: string; data: Event } =
            await fetch(`${API_URL}/event/slug/${id}`).then((res) =>
                res.json()
            );
        return event;
    } catch (error) {
        console.log(error);
    }
};
