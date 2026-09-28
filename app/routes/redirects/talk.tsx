import { redirect } from "react-router";
import type { Route } from "./+types/talk";

export async function clientLoader({ }: Route.ClientLoaderArgs) {
    throw redirect("/#talk");
}
