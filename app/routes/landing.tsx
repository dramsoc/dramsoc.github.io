import { Landing } from "~/pages/Landing";
import type { Route } from "./+types/landing";
import { getDefaultMeta } from "~/util/defaultMeta";

export function meta({ }: Route.MetaArgs) {
    return getDefaultMeta({
        title: "DramSoc | Imperial College Dramatic Society"
    });
}

export default function Home() {
    return (
        <Landing />
    );
}
