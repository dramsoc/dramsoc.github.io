import { getDefaultMeta } from "~/util/defaultMeta";
import type { Route } from "./+types/uch";
import { UCHPage } from "~/pages/UCH";

export function meta({ }: Route.MetaArgs) {
    return getDefaultMeta({
        title: "UCH | Imperial College Dramatic Society"
    });
}

export default function UCH() {
    return (
        <UCHPage />
    );
}
