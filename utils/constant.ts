/** @format */

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
