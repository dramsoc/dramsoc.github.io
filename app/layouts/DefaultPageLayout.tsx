import type { ReactNode } from "react";
import { Outlet } from "react-router";
import DefaultPageLayoutComponent from "~/components/dramsoc/layouts/DefaultPageLayoutComponent";

export default function DefaultPageLayout(): ReactNode {
    return (
        <DefaultPageLayoutComponent>
            <Outlet />
        </DefaultPageLayoutComponent>
    );
}
