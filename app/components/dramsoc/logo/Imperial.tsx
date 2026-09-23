import type { ReactNode } from "react";
import { Logo, type LogoProps } from "./Logo";

interface ImperialLogoProps extends LogoProps {
    useDark?: boolean;
}

export const Imperial = ({ useDark, ...other }: ImperialLogoProps): ReactNode => {
    return (
        <Logo
            {...other}
            className="h-fit!"
        >
            <img
                style={useDark ? {} : {
                    filter: "invert(100%)"
                }}
                src={
                    "/assets/img/logo/imperial.svg"
                }
            />
        </Logo>
    );
};
