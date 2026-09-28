import type { ReactNode } from "react";
import { Outlet } from "react-router";
import FooterPositionerComponent from "~/components/dramsoc/layouts/FooterPositionerComponent";

export default function FooterPositioner(): ReactNode {
    return (
        <FooterPositionerComponent>
            <Outlet />
        </FooterPositionerComponent>
    );
}
