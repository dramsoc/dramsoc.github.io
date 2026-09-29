import type { ReactNode } from "react";
import { Container } from "~/components/dramsoc/container/Container";

export const MR1Page = (): ReactNode => {
    return (
        <div
            className="flex flex-col gap-4 pb-4 [&_h2]:text-3xl [&_h2]:font-bold [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mt-4"
        >
            <div
                className="bg-cover bg-center"
                style={{
                    backgroundImage: "url(/assets/img/activities/papertech.jpg)"
                }}
            >
                <Container>
                    <h1
                        className="text-5xl font-bold py-20 md:py-50"
                    >
                        Meeting Room 1
                    </h1>
                </Container>
            </div>
            <Container>
                <p
                    className="w-full lg:w-2/3 text-lg"
                >
                    The Union Building contains an assortment of meeting rooms for general
                    use. We regularly make use of Meeting Room 1 for auditions, rehearsals
                    and tech meetings.
                </p>
            </Container>
            <Container
                className="flex flex-col gap-2"
            >
                <h2>
                    Directions
                </h2>
                <p>
                    Meeting Room 1 can be found on the first floor of the Union Building:
                </p>
                <ol
                    className="list-decimal list-inside marker:font-bold marker:text-lg [&>ul]:ps-4 lg:w-2/3"
                >
                    <li>Get to the East Staircase, either by:</li>
                    <ul
                        className="list-disc list-inside"
                    >
                        <li>
                            going through the main entrance to the Union Building, going through the
                            door on your left into 568, going straight across the room and through
                            the doors marked "The Union Bar", then going through the doors on your
                            left, or
                        </li>
                        <li>
                            going through the set of doors in the northeastenmost corner of the quad
                        </li>
                    </ul>
                    <li>Go up to level 1 on the East Staircase.</li>
                    <li>
                        Go through the door on your right on the level 1 landing, marked "Meeting Room 1".
                    </li>
                </ol>
                <h3>
                    Video
                </h3>
                <iframe
                    src="https://www.youtube-nocookie.com/embed/cbC7RHBOhd4"
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
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d155.23119524838887!2d-0.17786569412449768!3d51.50038860481976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1790640758538!5m2!1sen!2suk"
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
