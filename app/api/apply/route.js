import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB per file

export async function POST(request) {
  try {
    const formData = await request.formData();

    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const dob = formData.get("dob");
    const gender = formData.get("gender");
    const nationality = formData.get("nationality");
    const county = formData.get("county");
    const primarySchool = formData.get("primarySchool");
    const kcpeMarks = formData.get("kcpeMarks");
    const parentName = formData.get("parentName");
    const parentPhone = formData.get("parentPhone");
    const parentEmail = formData.get("parentEmail");
    const address = formData.get("address");
    const formClass = formData.get("form");
    const declaration = formData.get("declaration");
    const subjects = formData.getAll("subjects");

    const documents = formData.getAll("documents");
    const files = documents.filter((doc) => doc && doc.size > 0);

    if (
      !firstName ||
      !lastName ||
      !dob ||
      !gender ||
      !nationality ||
      !county ||
      !primarySchool ||
      !kcpeMarks ||
      !parentName ||
      !parentPhone ||
      !parentEmail ||
      !address ||
      !formClass
    ) {
      return NextResponse.json(
        { error: "All required fields must be filled" },
        { status: 400 }
      );
    }

    if (!declaration || declaration !== "true") {
      return NextResponse.json(
        { error: "You must agree to the declaration" },
        { status: 400 }
      );
    }

    const marksNum = parseInt(kcpeMarks);
    if (isNaN(marksNum) || marksNum < 0 || marksNum > 500) {
      return NextResponse.json(
        { error: "KCPE marks must be between 0 and 500" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(parentEmail)) {
      return NextResponse.json(
        { error: "Please provide a valid parent email" },
        { status: 400 }
      );
    }

    for (const file of files) {
      if (file.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          { error: `File "${file.name}" is too large. Maximum size is 10MB per file.` },
          { status: 400 }
        );
      }
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const attachmentArray = [];
    for (const file of files) {
      const buffer = Buffer.from(await file.arrayBuffer());
      attachmentArray.push({
        filename: file.name,
        content: buffer,
        contentType: file.type || "application/octet-stream",
        encoding: "base64",
        contentDisposition: "attachment",
      });
    }

    const subjectsText = subjects.length > 0 ? subjects.join(", ") : "None specified";

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "fatmaomarmoh@gmail.com",
      subject: `New Admission Application - ${firstName} ${lastName}`,
      html: `
        <h2>New Admission Application</h2>
        <h3>Student Information</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Nationality:</strong> ${nationality}</p>
        <p><strong>County:</strong> ${county}</p>
        <p><strong>Primary School:</strong> ${primarySchool}</p>
        <p><strong>KCPE Marks:</strong> ${marksNum}/500</p>
        <h3>Parent/Guardian Information</h3>
        <p><strong>Parent Name:</strong> ${parentName}</p>
        <p><strong>Parent Phone:</strong> ${parentPhone}</p>
        <p><strong>Parent Email:</strong> ${parentEmail}</p>
        <p><strong>Address:</strong> ${address}</p>
        <h3>Admission Details</h3>
        <p><strong>Form/Class Applying For:</strong> ${formClass}</p>
        <p><strong>Subjects of Interest:</strong> ${subjectsText}</p>
        <p><strong>Declaration Agreed:</strong> Yes</p>
        <p><strong>Documents Attached:</strong> ${files.length} file(s)</p>
      `,
      replyTo: parentEmail,
      attachments: attachmentArray,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully!",
    });
  } catch (error) {
    console.error("Apply form error:", error);
    return NextResponse.json(
      { error: "Failed to submit application. Please try again later." },
      { status: 500 }
    );
  }
}
