import type { MetaDescriptor } from "react-router";

interface DefaultMetaProps {
    title?: string;
    description?: string;
    image?: string;
}

export const getDefaultMeta = (
    {
        title = "DramSoc",
        description = "Imperial College Dramatic Society",
        image = "/assets/img/events/summer_ball1.jpg"
    }: DefaultMetaProps = {}
): MetaDescriptor[] => (
    [
        { title },
        {
            name: "title",
            content: title
        },
        {
            name: "description",
            content: description
        },
        // open graph
        {
            property: "og:type",
            content: "website"
        },
        {
            property: "og:title",
            content: title
        },
        {
            property: "og:description",
            content: description
        },
        {
            property: "og:image",
            content: image
        },
        // twitter
        {
            property: "twitter:card",
            content: "summary_large_image"
        },
        {
            property: "twitter:title",
            content: title
        },
        {
            property: "twitter:description",
            content: description
        },
        {
            property: "twitter:image",
            content: image
        }
    ]
);
