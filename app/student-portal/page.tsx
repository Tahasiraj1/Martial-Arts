"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { BarLoader } from "react-spinners";

interface StudentData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  program: string;
  city: string;
  postalCode: string;
  fullAddress: string;
}

export default function StudentPortal() {
  const { isSignedIn, isLoaded } = useAuth();
  const router = useRouter();
  const [studentData, setStudentData] = useState<StudentData | null>(null);
  const [allStudents, setAllStudents] = useState<StudentData[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push("/sign-in");
    } else if (isSignedIn) {
      fetchStudentData();
    }
  }, [isSignedIn, isLoaded, router]);

  const fetchStudentData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/student");
      if (!response.ok) {
        throw new Error("Failed to fetch student data");
      }
      const data = await response.json();
      if (data.isAdmin) {
        setIsAdmin(true);
        setAllStudents(data.students);
      } else {
        setStudentData(data.student);
      }
    } catch (error) {
      console.error("Error fetching student data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isLoaded || !isSignedIn || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <BarLoader color="#dc2626" />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Student Portal</h1>
      {isAdmin ? (
        <div>
          <h2 className="text-2xl font-bold mb-4">All Students</h2>
          {allStudents.length > 0 ? (
            <ul>
              {allStudents.map((student, index) => (
                <li key={index} className="mb-4 p-4 border border-red-600 rounded-xl">
                  <p>
                    Name: {student.firstName} {student.lastName}
                  </p>
                  <p>Email: {student.email}</p>
                  <p>Program: {student.program}</p>
                  <p>Phone: {student.phoneNumber}</p>
                  <p>City: {student.city}</p>
                  <p>Address: {student.fullAddress}</p>
                  <p>Postal Code: {student.postalCode}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No students found.</p>
          )}
        </div>
      ) : studentData ? (
        <div className="mb-4 p-4 border border-red-600 rounded-xl max-w-md md:max-w-lg">
          <p>
            Welcome, {studentData.firstName} {studentData.lastName}!
          </p>
          <p>Email: {studentData.email}</p>
          <p>Program: {studentData.program}</p>
          <p>Phone: {studentData.phoneNumber}</p>
          <p>City: {studentData.city}</p>
          <p>Address: {studentData.fullAddress}</p>
          <p>Postal Code: {studentData.postalCode}</p>
        </div>
      ) : (
        <div className="h-[450px] flex items-center justify-center text-2xl text-red-600 font-bold">
          Not Found
        </div>
      )}
    </div>
  );
}

