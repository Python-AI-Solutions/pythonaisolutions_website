import { NextRequest, NextResponse } from 'next/server'

// Google Sheets API configuration
const GOOGLE_SHEETS_API_KEY = process.env.GOOGLE_SHEETS_API_KEY
const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_SPREADSHEET_ID
const SHEET_NAME = 'Testimonials'

interface TestimonialData {
  name: string
  role: string
  company: string
  email: string
  testimonial: string
  rating: string
  projectType: string
  timeline: string
  results: string
  challenges: string
  recommendation: string
}

export async function POST(request: NextRequest) {
  try {
    const data: TestimonialData = await request.json()

    // Validate required fields
    if (!data.name || !data.role || !data.company || !data.email || !data.testimonial) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Prepare data for Google Sheets
    const timestamp = new Date().toISOString()
    const rowData = [
      timestamp,
      data.name,
      data.role,
      data.company,
      data.email,
      data.testimonial,
      data.rating,
      data.projectType,
      data.timeline,
      data.results,
      data.challenges,
      data.recommendation
    ]

    // Append data to Google Sheets
    const sheetsUrl = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${SHEET_NAME}!A:L:append?valueInputOption=RAW&key=${GOOGLE_SHEETS_API_KEY}`

    const response = await fetch(sheetsUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        values: [rowData]
      })
    })

    if (!response.ok) {
      console.error('Google Sheets API error:', await response.text())
      return NextResponse.json(
        { error: 'Failed to save testimonial' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Testimonial submitted successfully' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error submitting testimonial:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 