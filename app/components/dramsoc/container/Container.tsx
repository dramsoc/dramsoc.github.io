import type { PropsWithChildren, ReactNode } from "react";

interface ContainerProps {
    className?: string;
    id?: string;
}

export const Container = ({ id, className, children }: PropsWithChildren<ContainerProps>): ReactNode => {
    return (
        <div
            className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full ${className}`}
            id={id}
        >
            {children}
        </div>
    );
};
