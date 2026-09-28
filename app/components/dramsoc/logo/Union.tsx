import type { ReactNode } from "react";
import { Logo, type LogoProps } from "./Logo";

interface UnionLogoProps extends LogoProps {
    useDark?: boolean;
}

export const Union = ({ useDark, ...other }: UnionLogoProps): ReactNode => {
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
                    "/assets/img/logo/union.png"
                }
            />
        </Logo>
    );
};
