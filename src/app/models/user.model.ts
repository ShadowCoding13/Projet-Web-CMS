import { Site } from "./site.model";

export class User {
    uid: string;
    email: string;
    firstname: string;
    lastname: string;
    phoneNumber: string;
    sites: Site[];
}