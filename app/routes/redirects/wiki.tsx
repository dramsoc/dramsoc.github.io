import { redirect } from "react-router";
import type { Route } from "./+types/wiki";

export async function clientLoader({ }: Route.ClientLoaderArgs) {
    throw redirect("//wiki.dramsoc.org");
}
