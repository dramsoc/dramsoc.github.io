import type { ReactNode } from "react";
import { Logo, type LogoProps } from "./Logo";

interface DramSocLogoProps extends LogoProps {
    useDark?: boolean;
}

export const DramSoc = ({ useDark, ...other }: DramSocLogoProps): ReactNode => {
    return (
        <Logo
            {...other}
        >
            <img src={
                useDark ?
                    "/assets/img/logo/dramsoc_black_200.png"
                    :
                    "/assets/img/logo/dramsoc_white_200.png"
            } />
        </Logo>
    );
};
