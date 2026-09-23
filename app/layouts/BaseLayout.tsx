import type { ReactNode } from "react";
import { Outlet } from "react-router";
import BaseLayoutComponent from "~/components/dramsoc/layouts/BaseLayoutComponent";

export default function BaseLayout(): ReactNode {
    return (
        <BaseLayoutComponent>
            <Outlet />
        </BaseLayoutComponent>
    );
}
