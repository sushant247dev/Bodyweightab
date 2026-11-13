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

    // Send email notification to coach via Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      try {
        const emailHtml = `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #111111; background-color: #F9F8F5; border: 1px solid #E5E0D8;">
            <div style="border-bottom: 2px solid #111111; padding-bottom: 16px; margin-bottom: 24px;">
              <span style="font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: #6B6862; font-family: monospace;">BodyweightLab // New Intake</span>
              <h1 style="font-size: 24px; font-weight: 300; margin: 8px 0 0 0; color: #111111;">New 1-on-1 Coaching Application</h1>
            </div>

            <div style="background-color: #FFFFFF; border: 1px solid #E5E0D8; padding: 20px; margin-bottom: 24px;">
              <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                <tr>
                  <td style="padding: 8px 0; color: #6B6862; width: 140px;">Applicant Name:</td>
                  <td style="padding: 8px 0; font-weight: 600; color: #111111;">${applicationRecord.name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6B6862;">Email:</td>
                  <td style="padding: 8px 0;"><a href="mailto:${applicationRecord.email}" style="color: #111111; text-decoration: underline;">${applicationRecord.email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6B6862;">Instagram Handle:</td>
                  <td style="padding: 8px 0; font-family: monospace; color: #111111;">${applicationRecord.instagram}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6B6862;">Target Skill:</td>
                  <td style="padding: 8px 0; font-weight: 600; color: #111111;">${applicationRecord.targetSkill}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6B6862;">Experience Level:</td>
                  <td style="padding: 8px 0; color: #111111;">${applicationRecord.experience}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6B6862; vertical-align: top;">Current Obstacle:</td>
                  <td style="padding: 8px 0; color: #111111; line-height: 1.5;">${applicationRecord.obstacle}</td>
                </tr>
                ${
                  applicationRecord.notes !== "None"
                    ? `<tr>
                        <td style="padding: 8px 0; color: #6B6862; vertical-align: top;">Additional Notes:</td>
                        <td style="padding: 8px 0; color: #111111; line-height: 1.5;">${applicationRecord.notes}</td>
                      </tr>`
                    : ""
                }
              </table>
            </div>

            <div style="font-size: 12px; color: #6B6862; border-top: 1px solid #E5E0D8; padding-top: 16px;">
              <span>Application ID: <strong style="font-family: monospace; color: #111111;">${applicationRecord.id}</strong></span><br/>
              <span>Direct Reply: Hit reply to email <a href="mailto:${applicationRecord.email}" style="color: #111111;">${applicationRecord.name}</a> directly.</span>
            </div>
          </div>
        `;

        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "BodyweightLab <onboarding@resend.dev>",
            to: ["notsosushant@gmail.com"],
            reply_to: applicationRecord.email,
            subject: `[New Intake] ${applicationRecord.name} — ${applicationRecord.targetSkill}`,
            html: emailHtml,
          }),
        });
      } catch (emailErr) {
        console.error("Resend notification error:", emailErr);
      }
    }

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
