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
