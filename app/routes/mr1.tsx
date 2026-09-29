import { getDefaultMeta } from "~/util/defaultMeta";
import type { Route } from "./+types/mr1";
import { MR1Page } from "~/pages/MR1";

export function meta({ }: Route.MetaArgs) {
    return getDefaultMeta({
        title: "MR1 | Imperial College Dramatic Society"
    });
}

export default function MR1() {
    return (
        <MR1Page />
    );
}
