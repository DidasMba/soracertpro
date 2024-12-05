/** @format */

import { Event, GetParticipantsResponse, TEventParticipantInput } from "@/type";
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

export const addParticipant = async (eventInput: TEventParticipantInput) => {
    try {
        const response: {
            status: string;
            message: string;
            error_message: string;
        } = await fetch(`${API_URL}/event/add/participant`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                eventId: eventInput.eventId,
                userId: eventInput.userId,
            }),
            credentials: "include",
        }).then((res) => res.json());
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const getParticipantByEventId = async (id: number) => {
    try {
        const response: GetParticipantsResponse = await fetch(
            `${API_URL}/event/participant/${id}`,
            {
                method: "GET",
                credentials: "include",
            }
        ).then((res) => res.json());
        return response;
    } catch (error) {
        console.log(error);
    }
};
