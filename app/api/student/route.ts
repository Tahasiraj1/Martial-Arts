import { NextResponse } from "next/server";
import prisma from "@/lib/prisma"
import { auth, clerkClient } from "@clerk/nextjs/server";


async function isAdmin(userId: string) {
  try {
    const client = await clerkClient();
    const user = await client.users.getUser(userId);
    return user.publicMetadata.role === "admin";
  } catch (error) {
    console.error("Error checking admin status:", error);
    return false;
  }
}

export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "Sign in to register" }, { status: 401 });
    }

    const data = await req.json();
    const { studentDetails, course } = data;

    const student = await prisma.student.create({
      data: {
        clerkId: userId,
        firstName: studentDetails.firstName,
        lastName: studentDetails.lastName,
        phoneNumber: studentDetails.phoneNumber,
        email: studentDetails.email,
        city: studentDetails.city,
        fullAddress: studentDetails.fullAddress,
        postalCode: studentDetails.postalCode,
        program: course,
      },
    });

    return NextResponse.json({ success: true, student });
  } catch (error) {
    console.error("Error creating student:", error);
    return NextResponse.json(
      { error: "Failed to create student" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    console.log("Checking Admin");
    
    const adminStatus = await isAdmin(userId);

    if (adminStatus) {
      try {
        console.log("Fetching students for Admin");
        
        const students = await prisma.student.findMany();

        if (!students || students.length === 0) {
          return NextResponse.json(
            { error: "No students found" },
            { status: 404 }
          );
        }

        return NextResponse.json({ isAdmin: true, students });
      } catch (error) {
        console.error("Error fetching students", error);
        return NextResponse.json(
          { error: "Failed to fetch students data" },
          { status: 500 }
        );
      }
    } else {
        console.log("Fetching student details for a student");
        
      const student = await prisma.student.findUnique({
        where: { clerkId: userId },
      });

      if (!student) {
        return NextResponse.json(
          { error: "Student not found" },
          { status: 404 }
        );
      }
      
      console.log("Found student");
      return NextResponse.json({ isAdmin: false, student });
    }
  } catch (error) {
    console.error("Error fetching student:", error);
    return NextResponse.json(
      { error: "Failed to fetch student data" },
      { status: 500 }
    );
  }
}
