import { redirect } from "react-router";
import type { Route } from "./+types/winters";

export async function clientLoader({ }: Route.ClientLoaderArgs) {
    throw redirect("//wiki.dramsoc.org/Winters");
}
