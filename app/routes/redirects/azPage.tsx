import { redirect } from "react-router";
import type { Route } from "./+types/azPage";

export async function clientLoader({ }: Route.ClientLoaderArgs) {
    throw redirect("//www.imperialcollegeunion.org/activities/a-to-z/dramsoc");
}


