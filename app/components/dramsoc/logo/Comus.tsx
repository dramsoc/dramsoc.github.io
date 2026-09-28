import type { ReactNode } from "react";
import { Logo, type LogoProps } from "./Logo";

interface ComusLogoProps extends LogoProps {
    useDark?: boolean;
}

export const Comus = ({ useDark, ...other }: ComusLogoProps): ReactNode => {
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
                    "/assets/img/logo/comus.png"
                }
            />
        </Logo>
    );
};
