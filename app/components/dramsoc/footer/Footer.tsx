import type { ReactNode } from "react";
import { Container } from "../container/Container";
import { DramSoc } from "../logo/DramSoc";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faTiktok, type IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router";
import { Imperial } from "../logo/Imperial";
import { Union } from "../logo/Union";
import { Comus } from "../logo/Comus";

type SocialLink = {
    icon: IconDefinition;
    url: string;
};

const socials: SocialLink[] = [
    {
        icon: faInstagram,
        url: "//instagram.com/ic_dramsoc"
    },
    {
        icon: faFacebook,
        url: "//www.facebook.com/dramsoc"
    },
    {
        icon: faTiktok,
        url: "//www.tiktok.com/@ic_dramsoc"
    }
];

type Link = {
    name: string;
    url: string;
};

const policies: Link[] = [
    {
        name: "Hire Terms and Consitutions",
        url: "/static/files/hire_terms_and_conditions.pdf"
    },
    {
        name: "Constitution",
        url: "/static/files/constitution.pdf"
    },
    {
        name: "Bye Laws",
        url: "/static/files/bye_laws.pdf"
    },
    {
        name: "Data Protection",
        url: "/static/files/data_protection_policy.pdf"
    },
    {
        name: "Debtor Policy",
        url: "/static/files/debtor_policy.pdf"
    },
    {
        name: "Ticketing Policy",
        url: "/policy/ticketing"
    },
    {
        name: "Privacy Notice",
        url: "/static/files/privacy_notice.pdf"
    },
];

const misc: Link[] = [
    {
        name: "Committee Meeting Minutes",
        url: "//drive.google.com/drive/folders/1k5JOO6hJiYjPn8yoFymKMHEBGHtOoada"
    },
    {
        name: "Past Committees",
        url: "//wiki.dramsoc.org/Category:Committee"
    },
    {
        name: "Past Shows",
        url: "//wiki.dramsoc.org/Events"
    },
    {
        name: "Winters",
        url: "//wiki.dramsoc.org/Winters"
    },
    {
        name: "Horde",
        url: "//horde.dramsoc.org/"
    },
    {
        name: "Wiki",
        url: "//wiki.dramsoc.org/"
    }
];

export const Footer = (): ReactNode => {
    return (
        <div
            className="bg-black text-white w-full py-5 [&_a]:hover:opacity-70 **:transition-opacity"
        >
            <Container>
                <div
                    className="flex flex-wrap gap-6 [&_.flex]:gap-3"
                >

                    <div
                        className="flex flex-col grow"
                    >
                        <DramSoc
                            width={75}
                        />
                        <p>Est. 1912</p>
                        <div
                            className="flex"
                        >
                            {
                                socials.map(social => (
                                    <Link
                                        key={social.url}
                                        to={social.url}
                                        target="_blank"
                                    >
                                        <FontAwesomeIcon
                                            icon={social.icon}
                                            fontSize={20}
                                            style={{
                                                transform: "translateX(-3px)"
                                            }}
                                        />
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                    <div
                        className="flex flex-col grow items-end md:items-start [&_p]:text-right [&_p]:md:text-left"
                    >
                        <div>
                            <Link
                                to="tel:+442075948102"
                            >
                                <p>
                                    +44 (0) 20 759 48102
                                </p>
                            </Link>
                        </div>
                        <div>
                            <Link
                                to="https://maps.app.goo.gl/wFEc4Y3T66jhwqZj7"
                                target="_blank"
                            >
                                <p>
                                    Imperial College Dramatic Society<br />
                                    Imperial College Union<br />
                                    Beit Qudrangle<br />
                                    Prince Consort Road<br />
                                    South Kensington<br />
                                    London<br />
                                    SW7 2BB
                                </p>
                            </Link>
                        </div>
                    </div>
                    {
                        [
                            policies,
                            misc
                        ].map((links, i) => (
                            <div
                                className={
                                    `grow flex flex-col gap-2! ${i % 2 ? "items-end md:items-start text-right md:text-left" : ""}`
                                }
                            >
                                {
                                    links.map(link => (
                                        <div
                                            key={link.name}
                                        >
                                            <Link
                                                to={link.url}
                                                target="_blank"
                                            >
                                                {link.name}
                                            </Link>
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
                    <div
                        className="flex flex-col gap-6! justify-between"
                    >
                        <div
                            className="flex flex-col gap-6!"
                        >
                            <Link
                                to="//imperial.ac.uk"
                                target="_blank"
                            >
                                <Imperial />
                            </Link>
                            <Link
                                to="//imperialcollegeunion.org"
                                target="_blank"
                            >
                                <Union
                                    width={100}
                                />
                            </Link>
                        </div>
                        <Link
                            to="//comus.org.uk"
                            target="_blank"
                        >
                            <Comus
                                width={50}
                            />
                        </Link>
                    </div>
                </div>
                <div
                    className="text-center mt-8 text-gray-500"
                >
                    <p>
                        DramSoc is a part of Imperial College Union which is a{" "}
                        <Link
                            to="//register-of-charities.charitycommission.gov.uk/charity-search/-/charity-details/5033166"
                        >
                            UK Registered Charity, Number 1151241
                        </Link>
                    </p>
                    <p>
                        Copyright &copy; {new Date().getFullYear()} Imperial College Dramatic Society
                    </p>
                </div>
            </Container>
        </div>
    );
};
