import { Mail, SquareArrowOutUpRight, User } from "lucide-react";
import type { PropsWithChildren, ReactNode } from "react";
import { Link } from "react-router";
import { Container } from "~/components/dramsoc/container/Container";
import { Hero } from "~/components/dramsoc/hero/Hero";
import { DramSoc } from "~/components/dramsoc/logo/DramSoc";
import { Avatar, AvatarImage, AvatarFallback } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { Card, CardHeader, CardTitle } from "~/components/ui/card";
import { committee, committeeYearHeader } from "~/data/committee";
import { recentShows } from "~/data/recentShows";

const SectionHeader = ({ id, children }: PropsWithChildren<{ id?: string; }>): ReactNode => {
    return (
        <h2
            className="text-3xl font-bold scroll-m-[91px]"
            id={id}
        >
            {children}
        </h2>
    );
};

const SectionContainer = ({ id, children }: PropsWithChildren<{ id?: string; }>): ReactNode => {
    return (
        <Container
            className="flex flex-col text-center items-center gap-5 line-h leading-7 md:px-24! py-6 md:py-10 lg:py-14 max-w-250"
            id={id}
        >
            {children}
        </Container>
    );
};

export const Landing = (): ReactNode => {
    return (
        <>
            <Hero
                url="/assets/img/events/summer_ball1.jpg"
                useChevron
            >
                <div
                    className="flex flex-col justify-center items-center"
                >
                    <DramSoc
                        width={200}
                    />

                    <h1
                        className=" text-2xl md:text-4xl font-bold mt-4 text-center"
                    >
                        Imperial College Dramatic Society
                    </h1>
                </div>
            </Hero>
            <main
                className="*:scroll-m-[66px] sm:*:scroll-m-[91px]"
            >
                <SectionContainer>
                    <SectionHeader>
                        Welcome to DramSoc, Imperial's Dramatic Society!
                    </SectionHeader>
                    <p>
                        We do everything related to theatre: acting, set, costume, lighting,
                        sound, stage management, directing, production and more. There's plenty
                        to get involved in!
                    </p>
                    <p>
                        DramSoc own and operate the full range of state-of-the-art entertainment
                        equipment, and out technical team run events across college, from MTSoc
                        shows to historically the Summer Ball. We take pride in training our members
                        as theatre technicians, actors and directors. We run workshops, including
                        backstage tours, improvisation, set-building, lighting design, and much more,
                        and many of our alumi graduate to become theatre professionals.
                    </p>
                    <p>
                        We stage up to 2 plays per term, with recent productions including Oscar
                        Wilde's 'The Importance of Being Earnest,' and 'If Aliens Attacked I'd Die
                        First,' a piece of original work produced for the Edinburgh Fringe. We produce
                        a range of work both written by students and established playwrights. This is
                        the place to be if you love theatre!
                    </p>
                </SectionContainer>
                <Hero
                    url="/assets/img/activities/acting1.jpg"
                    id="acting"
                >
                    <SectionContainer>
                        <SectionHeader>
                            Acting
                        </SectionHeader>
                        <p>
                            DramSoc puts on at least one full-length play in our theatre, the Union
                            Concert Hall, pers term, as well as a number of other plays in different
                            venues around the College and further afield. Usually our main shows have
                            casts of 15~20 people and we welcome auditions from anyone with any amount
                            of experience, so if you're thinking of getting involved, keep an eye out
                            for audition posters and notices on our website, social media, and our mailing
                            lists at the stand and end of every term.
                        </p>
                    </SectionContainer>
                </Hero>
                <SectionContainer>
                    <SectionHeader>
                        Recent Shows
                    </SectionHeader>
                </SectionContainer>

                <div
                    className="flex flex-wrap w-full px-2 -mt-2 pb-4"
                >
                    {
                        recentShows.map(show => (
                            <Card
                                key={show.title}
                                className="relative pt-0 w-full"
                                title={show.tooltip}
                            >
                                <div
                                    className="w-full inset-0 bg-black/35 aspect-video bg-center bg-cover"
                                    style={{
                                        backgroundImage: `url(${show.imageURL})`
                                    }}
                                >

                                </div>
                                <CardHeader
                                    className="flex flex-col w-full h-full justify-center items-center"
                                >
                                    <CardTitle
                                        className="font-bold text-center"
                                    >
                                        {show.title} – {show.type}
                                    </CardTitle>
                                </CardHeader>
                            </Card>
                        )).map((element, i) => recentShows[i].link ? (
                            <Link
                                to={recentShows[i].link}
                                target="_blank"
                                className="w-full"
                            >
                                {element}
                            </Link>
                        ) : element).map(element => (
                            <div
                                className="w-full p-3 md:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col justify-center"
                            >
                                {element}
                            </div>
                        ))
                    }
                </div>

                <SectionContainer>
                    <SectionHeader>
                        Propose a Show
                    </SectionHeader>

                    <p>
                        DramSoc decides on each term's shows at a Play Proposals meeting (announced on the
                        DramSoc mailing list) held near to the end of the previous term. A full play proposal includes:
                    </p>

                    <ul
                        className="list-disc text-start"
                    >
                        <li>Representative excerpts from the script</li>
                        <li>A brief synopsis of the play, its genre and style</li>
                        <li>A cast breakdown, including M/F & large/medium/small parts</li>
                        <li>The creative vision and possible technical requirements</li>
                        <li>A production team including a director or producer</li>
                        <li>Whether performance rights are available</li>
                    </ul>

                    <p>
                        A play proposal with all of these things considered is much stronger than one without,
                        but none of these things are mandatory for a proposal. If you have an idea for a
                        proposal but are unsure about any aspect of the proposal or proposals process,
                        please email the President of Acting Director.
                    </p>
                </SectionContainer>

                <Hero
                    url="/assets/img/events/summer_ball2.jpg"
                    id="tech"
                >
                    <SectionContainer>
                        <SectionHeader>
                            Tech
                        </SectionHeader>

                        <p>
                            There are plenty of roles within DramSoc for those who prefer to stay off the
                            stage! All technical aspects of our shows, and of shows staged by the{" "}
                            <Link
                                to="//mtsoc.co.uk"
                                target="_blank"
                                className="underline"
                            >
                                Musical Theatre Society
                                <SquareArrowOutUpRight
                                    size={14}
                                    className="inline ml-1"
                                />
                            </Link>
                            , are provided by DramSoc crew. We design and build set, dress it and light it.
                            We design sound effects and rig sound equipment. And we make sure the cast look
                            their best with the right costumes, props and make-up.
                        </p>

                        <p>
                            On top of this, we provide sound, lighting and rigging for live events hosted by
                            the Union and other Clubs & Societies, historically including the Summer Ball,
                            talent shows, live music events and club nights. We would love you to be around
                            to help out! For more information or to get involved, email out Technical Director
                            and join the Crew Talk mailing list.
                        </p>
                    </SectionContainer>
                </Hero>
                <SectionContainer>
                    <SectionHeader>
                        Technical Services
                    </SectionHeader>
                    <p>
                        DramSoc provides a wide range of technical services; from plays to musicals, talent
                        shows to outdoor music festival stages, variety shows to the annual Summer Ball,
                        we do it all. We have a large and dedicated crew, and hire out professional
                        lighting and sound equipment, props and set from our extensive stores. In
                        addition, we offer comprehensive production management, consultancy and design
                        services.
                    </p>
                    <p>
                        Our experience in production management and design ranges from the large-scale
                        annual Summer Ball, including the lighting and sound in the Great Hall and the
                        Queen's Tower Rooms and all the set and design features, down to small societal
                        events in Metric. As such we believe that you will find our help and advice
                        invaluable whilst planning your event, regardless of its size or complexity.
                    </p>
                    <p>
                        Even if you do not use DramSoc's services, we will be more than happy to
                        advise and assist in getting alternative quotes. However, we are quite
                        confident that we care more about the success of your event than a hire
                        company would, and we can deliver more for your money, too. In any case,
                        please try to get in contact with us as early as possible, as the more time
                        we have, the better we can help you.
                    </p>
                </SectionContainer>
                <Hero
                    url="/assets/img/venues/uch2.jpeg"
                >
                    <SectionContainer>
                        <SectionHeader>
                            Union Concert Hall
                        </SectionHeader>
                        <p>
                            DramSoc's primary venue is the Imperial College Union Union Concert Hall
                            (or UCH for short). It was build in the 1950s, opening along with the rest
                            of the upper part of the Union building in 1956. DramSoc is responsible for
                            the maintenance of the technical aspects of the hall, and it contains a
                            fully-featured stage and technical installation.
                        </p>
                    </SectionContainer>
                </Hero>
                <SectionContainer
                    id="committee"
                >
                    <SectionHeader>
                        Committee{" "}
                        <span
                            className="opacity-50"
                        >
                            {committeeYearHeader}
                        </span>
                    </SectionHeader>
                </SectionContainer>
                <div
                    className="flex flex-wrap w-full pb-4 max-w-[900px] m-auto"
                >
                    {
                        committee.map(member => (
                            <div
                                key={member.name}
                                className="w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center p-2 mb-6"
                            >
                                <Avatar
                                    className="size-60"
                                >
                                    <AvatarImage
                                        src={member.image}
                                    />

                                    <AvatarFallback>
                                        <User
                                            className="size-1/2"
                                        />
                                    </AvatarFallback>
                                </Avatar>
                                <h5
                                    className="font-bold text-2xl mt-4"
                                >
                                    {member.name}
                                </h5>
                                <div
                                    className="text-center"
                                >
                                    {member.roles.map((role, i) => (
                                        <>
                                            {!!i &&
                                                <span
                                                    className="inline opacity-40"
                                                >
                                                    {" "}/{" "}
                                                </span>
                                            }
                                            <h6
                                                className="inline opacity-45 uppercase text-lg"
                                            >
                                                {role.name}
                                            </h6>
                                        </>
                                    ))}
                                </div>
                                <div
                                    className="text-center"
                                >
                                    {member.roles.map(role => (
                                        <Link
                                            to={`mailto:${role.email}`}
                                            className="block"
                                        >
                                            {role.email}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))
                    }
                </div>
                <Hero
                    url="/assets/img/events/summer_ball3.jpeg"
                    id="talk"
                >
                    <SectionContainer>
                        <SectionHeader>
                            Mailing Lists
                        </SectionHeader>
                        <p>
                            Joining our mailing lists is the best way to keep up to date with society
                            news, and find out about society events. Read the descriptions below to
                            help you decide which lists to join.
                        </p>
                        <div
                            className="flex flex-wrap items-center justify-center"
                        >
                            {
                                [
                                    {
                                        title: "DramSoc Talk",
                                        text: "This is the main society mailing list. All society members \
                                        should be on this list. If you want information about our plays and \
                                        society events, then this is the list to join. Traffic is minimal; \
                                        information about our plays and socials are the only things that tend \
                                        to go to this list.",
                                        link: "//mailing-lists.imperial.ac.uk/mailman3/lists/dramsoc-talk.imperial.ac.uk/"
                                    },
                                    {
                                        title: "Actor Talk",
                                        text: "This list is for conversation between DramSoc's community of \
                                        actors, and those interested in acting. It will be the primary means \
                                        of contact for workshops and members will be the first to know about \
                                        auditions for upcoming plays.",
                                        link: "//mailing-lists.imperial.ac.uk/mailman3/lists/icds-actor-talk.imperial.ac.uk/"
                                    },
                                    {
                                        title: "Crew Talk",
                                        text: "This list is for crew members, and is the main way we distribute \
                                        crew information, event and show dates, crew requests and crew calls. \
                                        All crew members should be on this list! Unless explicitly stated otherwise, \
                                        anyone can show up for any call that interests them, regardless of skill \
                                        level or prior experience; we find the best way to learn is to join our \
                                        experienced crew and learn from them!",
                                        link: "//mailing-lists.imperial.ac.uk/mailman3/lists/icds-crew-talk.imperial.ac.uk/"
                                    }
                                ].map(list => (
                                    <div
                                        className="p-4 flex flex-col text-center items-center w-full md:w-1/2"
                                    >
                                        <h4
                                            className="text-xl font-bold"
                                        >
                                            {list.title}
                                        </h4>
                                        <p>
                                            {list.text}
                                        </p>
                                        <Link
                                            to={list.link}
                                            className="w-fit mt-4"
                                        >
                                            <Button
                                                variant="default"
                                                size="lg"
                                                className="hover:cursor-pointer"
                                            >
                                                Subscribe
                                                <SquareArrowOutUpRight />
                                            </Button>
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                    </SectionContainer>
                </Hero>
                <SectionContainer
                    id="contact"
                >
                    <SectionHeader>
                        Contact Us
                    </SectionHeader>
                    {
                        [
                            {
                                name: "President",
                                email: "president@dramsoc.org",
                                description: "General queries."
                            },
                            {
                                name: "Treasurer",
                                email: "finance@dramsoc.org",
                                description: "Financial and invoicing. For quotes, \
                                contact the Technical Director."
                            },
                            {
                                name: "Technical Director",
                                email: "techdir@dramsoc.org",
                                description: "Technical services and hire."
                            },
                            {
                                name: "Acting Director",
                                email: "acting@dramsoc.org",
                                description: "Plays, play proposals, auditions and acting workshops."
                            },
                            {
                                name: "System Administrator",
                                email: "sysadmin@dramsoc.org",
                                description: "This website."
                            },
                            {
                                name: "Complaints",
                                email: "complaints@dramsoc.org",
                                description: "Concerns and complaints."
                            }
                        ].map(x => (
                            <div
                                className="flex gap-3 items-center self-start"
                            >
                                <Link
                                    to={`mailto:${x.email}`}
                                    className="w-fit"
                                >
                                    <Button
                                        variant="default"
                                        size="lg"
                                        className="hover:cursor-pointer"
                                    >
                                        <Mail />
                                        {x.name}
                                    </Button>
                                </Link>
                                <span>
                                    {x.description}
                                </span>
                            </div>
                        ))
                    }
                </SectionContainer>
            </main >
        </>
    );
};
