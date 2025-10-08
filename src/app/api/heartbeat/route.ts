import { NextResponse } from 'next/server';
import { createClient } from 'redis';

const redis = createClient({ url: process.env.REDIS_URL });

export async function GET() {
  try {
    await redis.connect();
  } catch (error) {
    if (!redis.isOpen) {
      return NextResponse.json(
        { error: 'Redis connection failed' },
        { status: 503 }
      );
    }
  }
  
  try {
    const count = await redis.incr('heartbeat_count');
    return NextResponse.json({ ok: true, count });
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : String(e) },
      { status: 500 }
    );
  }
}