import type { ReactNode } from "react";
import { Container } from "~/components/dramsoc/container/Container";

export const UCHPage = (): ReactNode => {
    return (
        <div
            className="flex flex-col gap-4 pb-4 [&_h2]:text-3xl [&_h2]:font-bold [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mt-4"
        >
            <div
                className="bg-cover bg-center"
                style={{
                    backgroundImage: "url(/assets/img/venues/uch1.jpg)"
                }}
            >
                <Container>
                    <h1
                        className="text-5xl font-bold py-20 md:py-50"
                    >
                        Union Concert Hall
                    </h1>
                </Container>
            </div>
            <Container>
                <p
                    className="w-full lg:w-2/3 text-lg"
                >
                    DramSoc's primary venue is the Imperial College Union Union Concert Hall
                    (or UCH for short). It was built in the 1950s, opening along with the rest
                    of the upper part of the Union building in 1956. DramSoc is responsible for
                    the maintenance of the technical aspects of the hall, and it contains a
                    fully-featured stage and technical installation.
                </p>
            </Container>
            <Container
                className="flex flex-col gap-2"
            >
                <h2>
                    Directions
                </h2>
                <p>
                    The Union Concert Hall can be found on the second floor of the Union Building:
                </p>
                <ol
                    className="list-decimal list-inside marker:font-bold marker:text-lg [&>ul]:ps-4"
                >
                    <li>Enter the Union Building through the main entrance in Beit Quad.</li>
                    <li>Head up to level 2:</li>

                    <ul
                        className="list-disc list-inside"
                    >
                        <li>via the stairs directly in front of you, or</li>
                        <li>using the main lift in front of you to your right, or</li>
                        <li>using the other lift behind you to your left next to the door to Metric</li>
                    </ul>
                    <li>Head through the doors to the left of the sign on the wall with "Union Concert Hall" written on it.</li>
                </ol>
                <h3>
                    Video
                </h3>
                <iframe
                    src="https://www.youtube.com/embed/mw45NQwkrCw"
                    title="Directions to the UCH"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="aspect-9/16 max-h-[calc(100vh-100px)] rounded-xl lg:max-w-2/3"
                />
                <h3>
                    Google Maps
                </h3>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.08654762814618!2d-0.1782311715344452!3d51.5003749335613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876055b14aeccb3%3A0x69d050f55be596d5!2sUnion%20Concert%20Hall!5e0!3m2!1sen!2suk!4v1790636261668!5m2!1sen!2suk"
                    width="600"
                    height="450"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="w-full rounded-xl aspect-video mt-1 lg:w-2/3"
                />
            </Container>
        </div>
    );
};
