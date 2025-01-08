import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { auth } from "@clerk/nextjs/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json(
        { error: "Sign in to register" },
        { status: 401 }
      );
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

    const student = await prisma.student.findUnique({
      where: { clerkId: userId },
    });

    if (!student) {
      return NextResponse.json({ error: "Student not found" }, { status: 404 });
    }

    return NextResponse.json({ isAdmin: false, student });
  } catch (error) {
    console.error("Error fetching student:", error);
    return NextResponse.json(
      { error: "Failed to fetch student data" },
      { status: 500 }
    );
  }
}
