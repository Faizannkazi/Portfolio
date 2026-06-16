import fs from "fs";
import os from "os";
import path from "path";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Serverless functions on Netlify do not provide persistent writable project storage.
    // Store submissions in a temporary directory for debugging only.
    const submissionsDir = path.join(os.tmpdir(), "contact-submissions");
    if (!fs.existsSync(submissionsDir)) {
      fs.mkdirSync(submissionsDir, { recursive: true });
    }

    const timestamp = new Date().toISOString();
    const submission = {
      id: Date.now(),
      timestamp,
      name,
      email,
      message,
    };

    const filename = `submission_${submission.id}.json`;
    const filepath = path.join(submissionsDir, filename);
    fs.writeFileSync(filepath, JSON.stringify(submission, null, 2));

    let stored = false;
    try {
      const logPath = path.join(submissionsDir, "submissions.json");
      let submissions = [];
      if (fs.existsSync(logPath)) {
        submissions = JSON.parse(fs.readFileSync(logPath, "utf8"));
      }
      submissions.push(submission);
      fs.writeFileSync(logPath, JSON.stringify(submissions, null, 2));
      console.log("Contact submission stored in temp path:", filepath);
      stored = true;
    } catch (storageError) {
      console.warn("Contact temp storage unavailable:", storageError);
    }

    res.status(200).json({
      success: true,
      message: "Submission received successfully",
      id: submission.id,
      stored,
    });
  } catch (error) {
    console.error("Error storing submission:", error);
    res.status(500).json({ error: "Failed to store submission" });
  }
}
