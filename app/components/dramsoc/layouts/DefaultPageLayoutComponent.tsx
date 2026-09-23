import type { PropsWithChildren, ReactNode } from "react";
import { Footer } from "~/components/dramsoc/footer/Footer";
import { Navbar } from "~/components/dramsoc/navbar/Navbar";

export default function DefaultPageLayoutComponent({ children }: PropsWithChildren): ReactNode {
    return (
        <>
            <div
                className="grow flex flex-col"
            >
                <Navbar />
                {children}
            </div>
            <Footer />
        </>
    );
}
