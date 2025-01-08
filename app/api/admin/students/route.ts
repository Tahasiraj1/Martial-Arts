import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { auth, clerkClient } from "@clerk/nextjs/server";

const prisma = new PrismaClient();


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

export async function GET() {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const adminStatus = await isAdmin(userId);

    if (!adminStatus) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    console.log("Fetching students for Admin");
    
    const students = await prisma.student.findMany();

    if (!students || students.length === 0) {
      return NextResponse.json({ message: "No students found", students: [] }, { status: 200 });
    }

    return NextResponse.json({ isAdmin: true, students });
  } catch (error) {
    console.error("Error fetching students:", error);
    return NextResponse.json(
      { error: "Failed to fetch students data" },
      { status: 500 }
    );
  }
}

