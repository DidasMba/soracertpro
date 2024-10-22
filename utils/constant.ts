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
