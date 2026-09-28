import type { ReactNode } from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "~/components/ui/navigation-menu";
import { Container } from "../container/Container";
import { DramSoc } from "../logo/DramSoc";
import { Link } from "react-router";

type NavItem = {
    name: string;
    url: string;
    priority?: boolean;
};

const navItems: NavItem[] = [
    {
        name: "Acting",
        url: "/#acting"
    },
    {
        name: "Tech",
        url: "/#tech"
    },
    {
        name: "Committee",
        url: "/#committee"
    },
    {
        name: "Mailing Lists",
        url: "/#talk",
        priority: true
    },
    {
        name: "Contact",
        url: "/#contact"
    },
    {
        name: "Tickets",
        url: "/tickets",
        priority: true
    }
];

export const Navbar = (): ReactNode => {
    return (
        <div
            className="w-full bg-black text-white sticky top-0 z-50"
        >
            <NavigationMenu
                className="min-w-full"
            >
                <Container>
                    <div
                        className="flex justify-between items-center py-2"
                    >
                        <Link
                            to="/"
                        >
                            <DramSoc
                                width={50}
                                className="sm:w-[75px]! sm:h-[75px]!"
                            />
                        </Link>
                        <NavigationMenuList
                            className="justify-end gap-1"
                        >
                            {
                                navItems.map(item => (
                                    <NavigationMenuItem
                                        key={item.name}
                                        className={
                                            [
                                                (() => {
                                                    if (item.priority) {
                                                        return "";
                                                    } else {
                                                        return "hidden sm:list-item";
                                                    }
                                                })()
                                            ].join(" ")
                                        }
                                    >
                                        <NavigationMenuLink
                                            className={navigationMenuTriggerStyle()}
                                            render={
                                                <Link to={item.url}>
                                                    <h2
                                                        className="font-bold"
                                                    >
                                                        {item.name}
                                                    </h2>
                                                </Link>
                                            }
                                        />
                                    </NavigationMenuItem>
                                ))
                            }
                        </NavigationMenuList>
                    </div>
                </Container>
            </NavigationMenu>
        </div >
    );
};
