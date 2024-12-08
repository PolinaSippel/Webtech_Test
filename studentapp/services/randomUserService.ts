import axios from "axios";
import { Student } from "@/types/student";

export async function getRandomUsers(count: number = 3): Promise<Student[]> {
    const response = await axios.get(
        `https://randomuser.me/api/?results=${count}`
    );
    const users = response.data.results.map((person: any) => ({
        name: `${person.name.first} ${person.name.last}`,
        email: person.email,
        city: person.location.city,
        image: person.picture.large,
    }));
    return users;
}
