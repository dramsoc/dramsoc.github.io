import { redirect } from "react-router";
import type { Route } from "./+types/shop";

export async function clientLoader({ }: Route.ClientLoaderArgs) {
    throw redirect("//www.imperialcollegeunion.org/student-group-shop?groupId=130");
}
