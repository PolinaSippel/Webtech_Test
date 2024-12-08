"use client";

import Profile from "@/components/profile";
import { Student } from "@/types/student";
import { getRandomUsers } from "@/services/randomUserService";
import { useState, useEffect } from "react";
import styles from './page.module.css';

export default function StudentPage() {
    const [students, setStudents] = useState<Student[]>([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchStudents = async () => {
            const fetchedStudents = await getRandomUsers(3); // Lade 3 Nutzer
            const sortedStudents = fetchedStudents.sort((a, b) =>
                a.name.localeCompare(b.name)
            );
            setStudents(sortedStudents);
        };

        fetchStudents();
    }, []);

    const filteredStudents = students.filter((student) =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={styles.container}>
            <h1>Student Profiles</h1>
            <input
                type="text"
                placeholder="Suche Studenten"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ marginBottom: "20px", padding: "10px", fontSize: "16px" }}
            />
            <div style={{ display: "flex", gap: "20px" }}>
                {filteredStudents.map((student, index) => (
                    <Profile key={index} student={student} />
                ))}
            </div>
        </div>
    );
}
