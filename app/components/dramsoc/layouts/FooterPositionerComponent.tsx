import type { PropsWithChildren, ReactNode } from "react";

export default function FooterPositionerComponent({ children }: PropsWithChildren): ReactNode {
    return (
        <div
            className="flex flex-col justify-between min-h-screen"
        >
            {children}
        </div>
    );
}
