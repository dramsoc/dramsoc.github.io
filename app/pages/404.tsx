import type { ReactNode } from "react";
import { Link } from "react-router";
import { Hero } from "~/components/dramsoc/hero/Hero";
import BaseLayoutComponent from "~/components/dramsoc/layouts/BaseLayoutComponent";
import DefaultPageLayoutComponent from "~/components/dramsoc/layouts/DefaultPageLayoutComponent";
import FooterPositionerComponent from "~/components/dramsoc/layouts/FooterPositionerComponent";

export const Error404 = (): ReactNode => {
    return (
        <BaseLayoutComponent>
            <FooterPositionerComponent>
                <DefaultPageLayoutComponent>
                    <Hero
                        url="/assets/img/venues/uch1.jpg"
                    >
                        <div
                            className="max-w-full md:max-w-2/3 lg:max-w-1/2 md:pb-20"
                        >
                            <h1
                                className="font-bold text-8xl mb-4"
                            >
                                404
                            </h1>
                            <p>
                                There's nothing here! If you followed a link to get here, it may have
                                been deleted. If you think you shouldn't have ended up on this page,
                                send an email to{" "}
                                <Link
                                    to="mailto:sysadmin@dramsoc.org"
                                    className="underline"
                                >
                                    sysadmin@dramsoc.org
                                </Link>{" "}
                                with a description of how you ended up here.
                            </p>
                        </div>
                    </Hero>
                </DefaultPageLayoutComponent>
            </FooterPositionerComponent>
        </BaseLayoutComponent>
    );
};
