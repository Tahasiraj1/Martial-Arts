"use client";

import { useEffect, useState } from "react";
import { useAuth, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { BarLoader } from "react-spinners";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
  const user = useUser();
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
      const response = await fetch("https://martial-arts-red.vercel.app/api/student");
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

  if (!isLoaded || !isSignedIn || isLoading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <BarLoader color="#dc2626" />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {isAdmin ? (
        <div>
          <h2 className="text-2xl font-bold mb-4">All Students</h2>
          {allStudents.length > 0 ? (
            <Table className="border border-red-600">
              <TableCaption>A list of all registered students.</TableCaption>
              <TableHeader>
                <TableRow className="hover:bg-primary">
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Program</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>City</TableHead>
                  <TableHead>Address</TableHead>
                  <TableHead>Postal Code</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {allStudents.map((student, index) => (
                  <TableRow key={index} className="hover:bg-primary">
                    <TableCell>{`${student.firstName} ${student.lastName}`}</TableCell>
                    <TableCell>{student.email}</TableCell>
                    <TableCell>{student.program}</TableCell>
                    <TableCell>{student.phoneNumber}</TableCell>
                    <TableCell>{student.city}</TableCell>
                    <TableCell>{student.fullAddress}</TableCell>
                    <TableCell>{student.postalCode}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <p className="text-center py-4">No students found.</p>
          )}
        </div>
      ) : studentData ? (
        <div>
          <h1 className="text-3xl font-bold mb-6">Student Portal</h1>
          <div className="mb-4 p-4 border border-red-600 rounded-xl max-w-md md:max-w-lg space-y-2">
            <div className="flex items-center">
              {user?.user?.imageUrl && (
                <Image
                  src={user?.user?.imageUrl}
                  alt={`${studentData.firstName}`}
                  width={44}
                  height={44}
                  className="rounded-full mr-4"
                />
              )}

              <p>
                Welcome, {studentData.firstName} {studentData.lastName}
              </p>
            </div>
            <p>Email: {studentData.email}</p>
            <p>Program: {studentData.program}</p>
            <p>Phone: {studentData.phoneNumber}</p>
            <p>City: {studentData.city}</p>
            <p>Address: {studentData.fullAddress}</p>
            <p>Postal Code: {studentData.postalCode}</p>
          </div>
        </div>
      ) : (
        <div className="h-[450px] flex items-center justify-center text-2xl text-red-600 font-bold">
          Not Found
        </div>
      )}
    </div>
  );
}
