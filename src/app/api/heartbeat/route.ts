import { exec } from "child_process";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  exec(`redis-cli -u "${process.env.REDIS_URL}" INCR heartbeat_count`, (err) => {
    if (err) console.error(err);
  });

  // Use nextUrl.clone() to create a valid absolute URL
  const url = new URL(req.url);
  url.pathname = "/not-found";

  return NextResponse.redirect(url);
}
