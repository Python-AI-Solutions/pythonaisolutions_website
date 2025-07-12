# Google Sheets Setup for Testimonials

This guide will help you set up Google Sheets to receive testimonial submissions from your website.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name the first sheet "Testimonials"
4. Add the following headers in row 1:
   ```
   A1: Timestamp
   B1: Name
   C1: Role
   D1: Company
   E1: Email
   F1: Testimonial
   G1: Rating
   H1: Project Type
   I1: Timeline
   J1: Results
   K1: Challenges
   L1: Recommendation
   ```

## Step 2: Get Google Sheets API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google Sheets API:
   - Go to "APIs & Services" > "Library"
   - Search for "Google Sheets API"
   - Click on it and press "Enable"
4. Create credentials:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "API Key"
   - Copy the API key (you'll need this for the environment variable)

## Step 3: Get Spreadsheet ID

1. Open your Google Sheet
2. The spreadsheet ID is in the URL:
   ```
   https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit
   ```
3. Copy the SPREADSHEET_ID part

## Step 4: Set Environment Variables

Add these to your `.env.local` file:

```env
GOOGLE_SHEETS_API_KEY=your_api_key_here
GOOGLE_SHEETS_SPREADSHEET_ID=your_spreadsheet_id_here
```

## Step 5: Configure Sheet Permissions

1. In your Google Sheet, click "Share" in the top right
2. Click "Change to anyone with the link"
3. Set permission to "Viewer"
4. Copy the link

## Step 6: Test the Integration

1. Start your development server
2. Go to `/testimonial` on your website
3. Fill out and submit the form
4. Check your Google Sheet to see if the data appears

## Security Notes

- The API key should be kept secret
- Consider restricting the API key to only Google Sheets API
- The sheet will be publicly readable but only you can edit it
- Consider setting up email notifications for new submissions

## Troubleshooting

### Common Issues:

1. **"Failed to save testimonial" error**
   - Check that your API key is correct
   - Verify the spreadsheet ID is correct
   - Ensure the sheet name is exactly "Testimonials"

2. **"Missing required fields" error**
   - Make sure all required fields are filled in the form

3. **API key not working**
   - Verify the Google Sheets API is enabled
   - Check that the API key has the correct permissions

### Testing the API:

You can test the API endpoint directly:

```bash
curl -X POST http://localhost:3000/api/submit-testimonial \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "role": "CEO",
    "company": "Test Company",
    "email": "test@example.com",
    "testimonial": "Great service!",
    "rating": "5",
    "projectType": "AI Development",
    "timeline": "3-6 months",
    "results": "Improved efficiency",
    "challenges": "Data processing",
    "recommendation": "Yes, absolutely"
  }'
```

## Data Structure

The form will submit the following data to your Google Sheet:

| Column | Field | Description |
|--------|-------|-------------|
| A | Timestamp | When the testimonial was submitted |
| B | Name | Full name of the person |
| C | Role | Job title/role |
| D | Company | Company or organization name |
| E | Email | Contact email |
| F | Testimonial | The main testimonial text |
| G | Rating | 1-5 star rating |
| H | Project Type | Type of project worked on |
| I | Timeline | How long the project took |
| J | Results | Specific results achieved |
| K | Challenges | Challenges faced |
| L | Recommendation | Would they recommend the service |

## Optional: Email Notifications

To receive email notifications when testimonials are submitted, you can:

1. Set up Google Apps Script in your sheet
2. Create a webhook that sends emails
3. Use a service like Zapier or IFTTT

Example Google Apps Script for email notifications:

```javascript
function onEdit(e) {
  if (e.range.getColumn() === 1 && e.range.getRow() > 1) {
    // New testimonial added
    const row = e.range.getRow();
    const data = e.source.getSheetByName('Testimonials').getRange(row, 1, 1, 12).getValues()[0];
    
    // Send email notification
    GmailApp.sendEmail(
      'your-email@gmail.com',
      'New Testimonial Submitted',
      `New testimonial from ${data[1]} (${data[3]})\n\nTestimonial: ${data[5]}`
    );
  }
}
``` 