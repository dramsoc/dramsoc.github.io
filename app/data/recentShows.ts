// todo: make dynamically generated when helix
type RecentShowListing = {
    imageURL: string;
    title: string;
    type: string;
    link?: string;
    tooltip?: string;
};

export const recentShows: RecentShowListing[] = [
    {
        title: "The Importance of Being Earnest",
        imageURL: "/assets/img/shows/earnest.jpg",
        type: "Spring Main 2026"
    },
    {
        title: "Treasure Island",
        imageURL: "/assets/img/shows/treasure_island.jpg",
        type: "Autumn Main 2025",
        link: "//www.instagram.com/p/DRsQ1B8Ck7Z",
        tooltip: "Photo by @nikdoeSs4d on Instagram"
    },
    {
        title: "Constellations",
        type: "Autumn Studio 2025",
        imageURL: "/assets/img/shows/constellations.jpg"
    },
    {
        title: "A Pair of Wings",
        type: "October Show 2025",
        imageURL: "/assets/img/shows/a_pair_of_wings.jpg"
    },
    {
        title: "RACKS",
        type: "Edinburgh Fringe 2025",
        imageURL: "/assets/img/shows/racks.jpeg",
        link: "//www.thespaceuk.com/shows/2025/racks-1"
    },
    {
        title: "The Storm",
        type: "Summer Studio 2025",
        imageURL: "/assets/img/shows/the_storm.jpg"
    },
    {
        title: "In The Moon Under Water",
        type: "Spring Studio 2025",
        imageURL: "/assets/img/shows/in_the_moon_under_water.jpeg"
    },
    {
        title: "Saint Joan",
        type: "Spring Main 2025",
        imageURL: "/assets/img/shows/saint_joan.jpeg"
    },
    {
        title: "Wyrd Sisters",
        type: "Autumn Main 2024",
        imageURL: "/assets/img/shows/wyrd_sisters.jpeg"
    },
    {
        title: "The Waters of March",
        type: "October Show 2024",
        imageURL: "/assets/img/shows/waters_of_march.jpeg"
    },
    {
        title: "Tycho",
        type: "Edinburgh Fringe 2024",
        imageURL: "/assets/img/shows/tycho.jpeg",
        link: "https://www.thespaceuk.com/shows/2024/tycho-mankind-s-first-hotel-on-the-moon"
    },
    {
        title: "Insinuation",
        type: "Summer Studio 2024",
        imageURL: "/assets/img/shows/insinuation.jpeg"
    },
];
