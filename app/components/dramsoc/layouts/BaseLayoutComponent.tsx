import type { PropsWithChildren, ReactNode } from "react";
import { ThemeProvider } from "~/components/ThemeProvider";

export default function BaseLayoutComponent({ children }: PropsWithChildren): ReactNode {
    return (
        <ThemeProvider
            defaultTheme="dark"
            storageKey="theme"
        >
            {children}
        </ThemeProvider>
    );
}
