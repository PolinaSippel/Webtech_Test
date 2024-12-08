import { Student } from "@/types/student";
import Image from "next/image";

export default function Profile({ student }: { student: Student }) {
    return (
        <div>
            <h3>Profile</h3>
            <Image
                src={student.image}
                alt={student.name}
                width={200}
                height={200}
            />
            <p>Name: {student.name}</p>
            <p>E-Mail: {student.email}</p>
            <p>Stadt: {student.city}</p>
        </div>
    );
}
