import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("layouts/BaseLayout.tsx", [
        layout("layouts/FooterPositioner.tsx", [
            layout("layouts/DefaultPageLayout.tsx", [
                index("routes/landing.tsx")
            ])
        ])
    ]),

    // redirects
    route("tickets", "routes/redirects/shop.tsx", { id: "tickets" }),
    route("shop", "routes/redirects/shop.tsx", { id: "shop" }),

    route("join", "routes/redirects/azPage.tsx", { id: "join" }),
    route("membership", "routes/redirects/azPage.tsx", { id: "membership" }),

    route("talk", "routes/redirects/talk.tsx"),
    route("calendar", "routes/redirects/calendar.tsx"),

    route("wiki", "routes/redirects/wiki.tsx"),
    route("winters", "routes/redirects/winters.tsx"),
] satisfies RouteConfig;
