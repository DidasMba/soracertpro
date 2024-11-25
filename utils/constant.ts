/** @format */

import coaching from "@/assets/program/coaching.png";
import coaching_thumb from "@/assets/program/thumbnail/coaching.png";

import webdesign from "@/assets/program/webdesign.png";
import webdesign_thumbnail from "@/assets/program/thumbnail/webdesign-thumbnail.png";

import webdev from "@/assets/program/webdev.png";
import webdev_thumbnail from "@/assets/program/thumbnail/webdev-thumbnail.png";

export const navItems = [
    {
        id: 1,
        pageName: "home",
        name: "Accueil",
        href: "/",
        hasDropdow: false,
    },
    {
        id: 2,
        pathName: "resource",
        name: "Ressources",
        href: "/",
        hasDropdow: true,
        children: [
            {
                id: 1,
                key: "resource",
                name: "Ressources",
                href: "#",
            },
            {
                id: 2,
                key: "resource",
                name: "Ressources",
                href: "#",
            },
        ],
    },
    {
        id: 3,
        pageName: "programs",
        name: "Nos Programmes",
        href: "/programs",
        hasDropdow: false,
    },
    {
        id: 4,
        pageName: "events",
        name: "Nos Événements",
        href: "/events",
        hasDropdow: false,
    },
];

export const statBanner = [
    {
        id: 1,
        label: "Estudiants depuis notre création en 2022",
        num: 100,
    },
    {
        id: 2,
        label: "Éducateurs du monde entier",
        num: 190,
    },
    {
        id: 3,
        label: "Organismes proposant nos cours",
        num: 900,
    },
    {
        id: 4,
        label: "Pays où nous servons les apprenants",
        num: 40,
    },
];

interface Testimonial {
    id: number;
    name: string;
    avatar?: string | null;
    initial?: string;
    content: string;
    timeAgo: string;
    rating: number;
}

export const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Mikhail Joshua Whitton",
        avatar: null,
        content:
            "Rejoindre ce bootcamp a été une expérience qui a changé ma vie. La formation pratique et le mentorat m'ont ouvert de nouvelles opportunités de carrière que je n'aurais jamais imaginées. La communauté solidaire et les formateurs dévoués m'ont donné la confiance nécessaire pour me lancer dans la tech et construire un avenir qui me passionne vraiment.",
        timeAgo: "il y a 4 mois",
        rating: 5,
    },
    {
        id: 2,
        name: "Melanie Giandzi",
        avatar: null,
        initial: "M",
        content:
            "Ce bootcamp technologique a complètement transformé ma vie. Les instructeurs vous poussent à dépasser vos limites. Aujourd'hui, j'ai les compétences et la confiance nécessaires pour réaliser des projets et contribuer à des solutions technologiques concrètes. Ce programme a marqué le début d'une nouvelle aventure passionnante pour moi.",
        timeAgo: "il y a 6 mois",
        rating: 5,
    },
    {
        id: 3,
        name: "Hayley Shumack",
        avatar: null,
        initial: "H",
        content:
            "Le défi de codage hivernal a été une expérience incroyable qui m'a poussée au-delà de mes limites. Je suis passée de sentir comme une étrangère dans la tech à faire partie d'une communauté qui se soucie vraiment de mes progrès. Grâce à ce programme, je développe désormais des projets importants et j'ai décroché mon premier emploi dans la tech !",
        timeAgo: "il y a 11 mois",
        rating: 5,
    },
];

export const howWeWorkContents = [
    {
        id: 1,
        title: "Nous aidons les jeunes a lancer leurs carrieres",
        content:
            "Depuis 2020, nous avons eu un impact significatif sur l'écosystème, en formant et en offrant des bourses à des milliers de jeunes africains.",
        imageURL: "/latest property 1.png",
    },
    {
        id: 2,
        title: "Certification & Bourses",
        content:
            "Nous offrons des Certification reconnues et des Bourses des formations internationales.",
        imageURL: "/bien2.jpg",
    },
    {
        id: 3,
        title: "Communaute",
        content:
            "Nous sommes une Communaute des passionnes da la technologie et de innovation.",
        imageURL: "/aboutus.png",
    },
];

export const programmData = [
    {
        id: 1,
        title: "HTML & CSS Fundamentals",
        description:
            "Apprenez les bases du web : HTML pour la structure et CSS pour le style.",
        thumbnail: coaching_thumb,
        image: coaching,
        slug: "webdev",
        alt: "HTML and CSS logo",
        location: "En ligne",
        date: "2024-04-15",
    },
    {
        id: 2,
        title: "JavaScript Essentials",
        description:
            "Maîtrisez le langage dynamique du web : JavaScript pour des applications web interactives.",
        thumbnail: webdev_thumbnail,
        image: webdev,
        slug: "wed_design",
        alt: "JavaScript logo",
        location: "Centre Soracert",
        date: "2024-07-22",
    },
    {
        id: 3,
        title: "React for Web Development",
        description:
            "Construisez des interfaces utilisateur efficaces et évolutives avec React, une bibliothèque JavaScript populaire.",
        thumbnail: webdesign_thumbnail,
        image: webdesign,
        slug: "network",
        alt: "React logo",
        location: "En ligne",
        date: "2024-11-12",
    },
];

export const TimmingOptions = [
    { id: "tous", label: "Tout" },
    { id: "jour", label: "Jour" },
    { id: "semaine", label: "Semaine" },
    { id: "mois", label: "Mois" },
    { id: "annee", label: "Annee" },
];

export const locationOptions = [
    { id: "online", label: "En ligne" },
    { id: "onsite", label: "Presentielle" },
    { id: "replay", label: "Replay" },
];

export const programWebOptions = [
    { id: "tous", label: "Tout" },
    { id: "webdev", label: "Wed development" },
    { id: "wed_design", label: "Design" },
    { id: "network", label: "IT Reseaux" },
];

export const blogueWebOptions = [
    { id: "tous", label: "Tout" },
    { id: "dev", label: "Wed development" },
    { id: "tel", label: "Telecom" },
    { id: "reseau", label: "IT Reseaux" },
    { id: "graphic", label: "Design" },
]
