/** @format */

export type TRadio = {
    options: Array<{ id: string; label: string }>;
    selectedDate: string;
    setSelectedDate: React.Dispatch<React.SetStateAction<string>>;
};
