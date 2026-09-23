import type { PropsWithChildren, ReactNode } from "react";
import { Container } from "../container/Container";
import { ChevronDown } from "lucide-react";

interface HeroProps {
    url: string;
    headerSize?: number;
    useChevron?: boolean;
    id?: string;
    className?: string;
};

export const Hero = ({ url, headerSize = 90, className, useChevron, id, children }: PropsWithChildren<HeroProps>): ReactNode => {
    return (
        <div
            className={`relative  lg:min-h-(--lg-min-height) md:min-h-(--md-min-height) flex flex-col justify-center items-center py-8 ${className}`}
            style={{
                "--lg-min-height": `calc(100vh - ${headerSize}px)`,
                "--md-min-height": `calc(80vh - ${headerSize}px)`,
            } as React.CSSProperties}
            id={id}
        >
            <div
                className="absolute bg-cover! bg-center! w-full h-full -z-1 blur-[0.5px] brightness-50"

                style={{
                    background: `url(${url})`
                }}
            >

            </div>
            <Container>
                {children}
            </Container>
            {
                useChevron ?
                    <div
                        className="absolute w-full bottom-0.5 md:bottom-2 lg:bottom-5 flex justify-center"
                    >
                        <ChevronDown />
                    </div>
                    :
                    null
            }
        </div>
    );
};
