import { NextResponse } from 'next/server'

export async function GET() {
  const response = await fetch('http://localhost:8000/video_feed')
  return new NextResponse(response.body, {
    headers: {
      'Content-Type': 'multipart/x-mixed-replace; boundary=frame',
    },
  })
}