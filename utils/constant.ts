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
        href: "/sora/home",
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
                pathName: "membership",
                text: "Membership",
                href: "/sora/membership",
            },
            {
                pathName: "blogue",
                text: "Blog",
                href: "/sora/blogue",
            },
            {
                pathName: "carieure",
                text: "Carieure",
                href: "#",
            },
            {
                pathName: "partner",
                text: "Nos Partenaire",
                href: "#",
            },
        ],
    },
    {
        id: 3,
        pageName: "about",
        name: "A Propos",
        href: "/sora/about-us",
        hasDropdow: false,
    },
    {
        id: 4,
        pageName: "programs",
        name: "Nos Programmes",
        href: "/sora/programs",
        hasDropdow: false,
    },
    {
        id: 5,
        pageName: "events",
        name: "Nos Événements",
        href: "/sora/events",
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

export const blogueData = [
    {
        id: 1,
        title: "Les 10 Langages de Programmation les Plus Demandés en 2024",
        titredescription:
            "Découvrez les langages de programmation incontournables en 2024. Que vous soyez débutant ou développeur expérimenté, apprenez...",
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
        title: "Comment Protéger Vos Données en Ligne",
        titredescription:
            "appprenez les meilleures pratiques et astuces essentielles pour protéger vos données en ligne. De la gestion des mots de passe à la navigation sécurisée, découvrez comment...",
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
        titredescription:
            "Découvrez des conseils pratiques pour sécuriser vos informations personnelles en ligne. Apprenez à éviter les cyberattaques, à utiliser des outils de protection efficaces...",
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

export const blogueDataDetails  = [
    {
     id: 1,
    title: "Bienvenue à Python Radio Marie ",
    description: "Une introduction au monde passionnant de Python.",
    image: "/path/to/image1.jpg", // Chemin ou image statique
    alt: "Image de Python Radio",
    date: "2024-12-05",
    },
    {
      id: 2,
      title: "Another Blog",
      image: coaching,
      alt: "html css",
          description: "OKOJDICFIDHIIDHV"
    },
  ];
  



export const TimmingOptions = [
    { id: "tous", label: "Tout" },
    { id: "jour", label: "Jour" },
    { id: "semaine", label: "Semaine" },
    { id: "mois", label: "Mois" },
    { id: "annee", label: "Annee" },
];

export const programWebOptions = [
    { id: "tous", label: "Tout" },
    { id: "webdev", label: "Wed development" },
    { id: "wed_design", label: "Design" },
    { id: "network", label: "IT Reseaux" },
];

export const categoryEventOptions = [
    { id: "CONFERENCE", label: "Conference" },
    { id: "ATELIER", label: "Atelier" },
    { id: "HACKATHON", label: "Hackathon" },
];

export const historyData = [
    {
        id: 1,
        title: "Commencement ",
        date: "2024-04-15",
        description:
            "Fondée par Degaul BANZA, **SoraCert** a lancé son premier cycle de recrutement à Lubumbashi, en RDCongo, recrutant sa première cohorte de six ingénieurs logiciels Congolais après avoir reçu 100 candidatures..",
    },
    {
        id: 2,
        title: "SoraCert obtient un financement de série A",
        date: "2023",
        description:
            "SoraCert a obtenu de dollars de financement en série A, avec la participation des investisseurs, et a ouvert des opérations au Congo, Kinshasa.",
    },
    {
        id: 3,
        title: "Première cohorte entièrement féminine",
        date: "2022",
        description:
            "SoraCert a réalisé sa levée de fonds de série B,  organise sa première cohorte entièrement féminine au Congo...",
    },
    {
        id: 4,
        title: "SoraCert obtient un financement de série C",
        date: "2021",
        description:
            "La levée de fonds de série C porte le financement total ; SoraCert atteint 500 développeurs..",
    },
    {
        id: 5,
        title: "La première cohorte termine un programme",
        date: "2020",
        description:
            "Les deux premières promotions d'ingénieurs terminent le programme de quatre ans.",
    },
];

export const dateEventFilter = [
    { id: "all", label: "Tous" },
    { id: "today", label: "Aujourdhui" },
    { id: "week", label: "Hebdomadaire" },
    { id: "month", label: "Mensuel" },
];

export const LocationOptions = [
    { id: "tous", label: "Tous" },
    { id: "ONLINE", label: "En Ligne" },
    { id: "ONSITE", label: "Presentielle" },
    { id: "REPLAY", label: "En Replay" },
];

export const CategoryProgramOptions = [
    { id: "all", label: "Tous" },
    { id: "WEBDESIGN", label: "Design" },
    { id: "WEBDEVELOPMENT", label: "Web Development" },
    { id: "NETWORK", label: "IT Reseaux" },
    { id: "DATAANALYSIS", label: "Data Analysis" },
];

export const gender = [
    { value: "MALE", label: "Masculin" },
    { value: "FEMALE", label: "Feminin" },
];


