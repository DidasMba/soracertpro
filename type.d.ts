/** @format */

import React from "react";

export type TRadio = {
    options: Array<{ id: string; label: string }>;
    selectedDate: string;
    setSelectedDate: React.Dispatch<React.SetStateAction<string>>;
    name: string;
};

export type TRadioCategory = {
    options: Array<{ id: string; label: string }>;
    selectedItem: string;
    setSelectedItem: React.Dispatch<React.SetStateAction<string>>;
};

enum EventType {
    ATELIER = "ATELIER",
    HACKATHON = "HACKATHON",
    CONFERENCE = "CONFERENCE",
}

type TextFieldType = {
    label: string;
    placeholder: string;
    error: string;
    touched: boolean;
    name: string;
    value: string | number;
    type: React.HTMLInputTypeAttribute;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleBlur: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
};

export type UserResponse = {
    firstname: string;
    lastname: string;
    email: string;
    gender: string;
};

export type UserDataInput = {
    firstname: string;
    lastname: string;
    avatar?: File | null;
    username?: string;
    email: string;
    password: string;
    gender: string;
};

export type Event = {
    id: number;
    slug: string;
    theme: string;
    description: string;
    start_date: string;
    end_date: string;
    location: string;
    price?: number;
    coordinates?: Record<string, unknown>;
    images: string[];
    thumbnail: string;
    isPublished?: boolean;
    eventType: EventType;
    createdAt: Date;
    updatedAt: Date;
    participants: Participant[];
    creator: User;
    creatorId: number;
    moderators: Moderator[];
    comments: Comment[];
    EventSponsor: EventSponsor[];
};

type Pattern = {
    avatar: string;
    company: string;
};

export type EventSponsor = {
    id: number;
    eventId: number;
    patternId: number;
    amount?: number;
    note?: string;
    event: Event;
    pattern: Pattern;
    createdAt: Date;
    updatedAt: Date;
};

export type Comment = {
    id: number;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    eventId: number;
    event: Event;
};

export type Moderator = {
    id: number;
    firstname: string;
    lastname: string;
    bio: string;
    phone: string;
    avatar: string;
    email: string;
    event?: Event;
    eventId?: number;
    createdAt: Date;
    updatedAt: Date;
};

export type Participant = {
    id: number;
    userId: number;
    eventId: number;
    isPayed: boolean;
    user: User;
    event: Event;
};

export type TProgram = {
    id: number;
    title: string;
    description: string;
    location: string;
    programCategory: string;
    edition: string;
    images: string[];
    thumbnail: string;
    price: number;
    date_from: string;
    date_to: string;
    isLaunched: boolean;
    userId: number;
    programSponsor: any[]; // Adjust to the specific structure of sponsors if known
    ProgramTutor: any[]; // Adjust to the specific structure of tutors if known
    participants: any[];
    createdAt: string;
    updatedAt: string;
};
// export type TPblogue = {
//     id: number;
//     title: string;
//     titredescription: string;
//     description: string | StaticImageData;
//     thumbnail: string;
//     image: string;
//     slug: string;
//     title: string;
//     description: string;
//     location: string;
//     programCategory: string;
//     edition: string;
//     images: string[];
//     thumbnail: string;
//     price: number;
//     date_from: string;
//     date_to: string;
//     isLaunched: boolean;
//     userId: number;
//     programSponsor: any[]; // Adjust to the specific structure of sponsors if known
//     ProgramTutor: any[]; // Adjust to the specific structure of tutors if known
//     participants: any[];
//     createdAt: string;
//     updatedAt: string;
// };
