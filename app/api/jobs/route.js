import { connectDB } from "../../../lib/mongodb";
import Job from "../../../models/Job";

export async function GET() {
  try {
    await connectDB();
    const jobs = await Job.find().sort({ createdAt: -1 });
    return new Response(JSON.stringify(jobs), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 }); 
  }
}

export async function POST(req) {
  try {
    await connectDB();
    const data = await req.json();
    const newJob = await Job.create(data);
    return new Response(JSON.stringify(newJob), { status: 201 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
