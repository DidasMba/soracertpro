/** @format */

import { TParticipant } from "@/type";

export const isRegistered = (
    id: number,
    participants: Array<TParticipant>
): boolean => {
    const items = participants?.filter((item) => item.userId == id)[0];
    if (items) {
        return true;
    }
    return false;
};
