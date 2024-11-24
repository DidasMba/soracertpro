/** @format */

export type TRadio = {
    options: Array<{ id: string; label: string }>;
    selectedDate: string;
    setSelectedDate: React.Dispatch<React.SetStateAction<string>>;
};

export type TRadioCategory = {
    options: Array<{ id: string; label: string }>;
    selectedItem: string;
    setSelectedItem: React.Dispatch<React.SetStateAction<string>>;
};

export type TProgram = {
    id: number;
    title: string;
    description: string | StaticImageData;
    thumbnail: string;
    image: string;
    slug: string;
    alt: string;
    location: string;
    date: string;
};

enum EventType {
    ATELIER = "ATELIER",
    HACKATHON = "HACKATHON",
    CONFERENCE = "CONFERENCE",
}

export type Event = {
    id: number;
    slug: string;
    theme: string;
    description: string;
    start_date: Date;
    end_date: Date;
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
