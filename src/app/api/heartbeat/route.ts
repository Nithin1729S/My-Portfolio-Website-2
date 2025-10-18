import { exec } from "child_process";
import { NextResponse } from "next/server";

const redis_url = process.env.REDIS_URL;

export async function GET() {
  // Run Redis increment silently
  const cmd = `redis-cli -u "${redis_url}" INCR heartbeat_count`;
  exec(cmd, (error) => {
    if (error) console.error("Error executing Redis command:", error);
    else console.log("Heartbeat incremented");
  });

  // Show fake 404-style page content
  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>404 | Are You Lost?</title>
        <style>
          body {
            font-family: system-ui, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background: #f1f5f4;
            color: #111;
          }
          .container {
            text-align: center;
            max-width: 500px;
            padding: 1rem;
          }
          h1 {
            font-size: 5rem;
            font-weight: 900;
            margin: 0;
          }
          h2 {
            font-size: 1.5rem;
            font-weight: 600;
            margin: 0.5rem 0 1rem;
          }
          p {
            color: #444;
            margin-bottom: 1.5rem;
          }
          a {
            display: inline-block;
            text-decoration: none;
            background: #5aa4a4;
            color: white;
            padding: 0.6rem 1.2rem;
            border-radius: 6px;
            transition: background 0.2s;
          }
          a:hover {
            background: #6db9b9;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>404</h1>
          <h2>Are You Lost?</h2>
          <p>Looks like you've followed a broken link or entered a URL that doesn't exist on this site.</p>
          <a href="/">Take Me Home</a>
        </div>
      </body>
    </html>
  `;

  return new NextResponse(html, {
    status: 404,
    headers: { "Content-Type": "text/html" },
  });
}
