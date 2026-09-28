import { redirect } from "react-router";
import type { Route } from "./+types/calendar";

export async function clientLoader({ }: Route.ClientLoaderArgs) {
    throw redirect("//outlook.office365.com/owa/calendar/67f72540d8e24159bd72cf807716dc86@imperial.ac.uk/82262ebe17ff4419a97649dd90fd85ed6387450589728315788/calendar.html");
}
