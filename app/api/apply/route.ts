import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const {
      name,
      email,
      instagram,
      experience,
      targetSkill,
      obstacle,
      notes,
    } = data;

    // Server-side validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please provide a valid full name (minimum 2 characters)." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!experience) {
      return NextResponse.json(
        { error: "Please specify your current calisthenics experience level." },
        { status: 400 }
      );
    }

    if (!targetSkill) {
      return NextResponse.json(
        { error: "Please select the primary skill you wish to unlock." },
        { status: 400 }
      );
    }

    if (!obstacle || typeof obstacle !== "string" || obstacle.trim().length < 10) {
      return NextResponse.json(
        { error: "Please describe your biggest obstacle in a few words (min 10 characters)." },
        { status: 400 }
      );
    }

    // Construct application record
    const applicationRecord = {
      id: `APP-${Date.now()}`,
      createdAt: new Date().toISOString(),
      name: name.trim(),
      email: email.trim(),
      instagram: instagram?.trim() || "Not provided",
      experience,
      targetSkill,
      obstacle: obstacle.trim(),
      notes: notes?.trim() || "None",
    };

    // Logging for server diagnostics / Vercel log stream
    console.log("=== NEW COACHING APPLICATION RECEIVED ===");
    console.log(JSON.stringify(applicationRecord, null, 2));

    // Extensible Hook: If coach configures RESEND_API_KEY or APPLICATION_WEBHOOK_URL on Vercel
    const webhookUrl = process.env.APPLICATION_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(applicationRecord),
        });
      } catch (webhookErr) {
        console.error("Optional Webhook dispatch failed:", webhookErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Application submitted successfully. We will review your profile within 24-48 hours.",
        applicationId: applicationRecord.id,
      },
      { status: 201 }
    );
  } catch (err: unknown) {
    console.error("Coaching application processing error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your application. Please try again." },
      { status: 500 }
    );
  }
}
