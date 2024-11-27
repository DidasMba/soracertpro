/** @format */

import { Event } from "@/type";
import { API_URL } from "./baseUrl";

export const getAllEvents = async (date: string, category: string) => {
    try {
        const events: { status: string; message: string; data: Array<Event> } =
            await fetch(
                `${API_URL}/event/published?date=${date}&eventType=${category}`
            ).then((res) => res.json());
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
