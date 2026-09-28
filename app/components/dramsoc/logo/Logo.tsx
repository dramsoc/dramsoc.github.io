import type { PropsWithChildren, ReactNode } from "react";

export interface LogoProps {
    width?: number;
    className?: string;
};

export const Logo = (
    {
        width = 200,
        className = "",
        children
    }: PropsWithChildren<LogoProps>
): ReactNode => {
    return (
        <div
            style={{
                width: width,
                height: width
            }}
            className={`flex justify-center items-center overflow-hidden ${className}`}
        >
            {children}
        </div>
    );
};
