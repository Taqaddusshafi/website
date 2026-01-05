import { NextResponse } from 'next/server';
import { submitToIndexNow } from '@/lib/indexnow';

export const dynamic = 'force-dynamic';

export async function GET() {
  const baseUrl = 'https://hidayahcompanionpro.online';
  
  // You can also dynamically generate this list from your sitemap logic if shared
  const urls = [
    baseUrl,
    `${baseUrl}/#features`,
    `${baseUrl}/#download`,
  ];

  try {
    await submitToIndexNow(urls);
    return NextResponse.json({ 
      success: true, 
      message: `Submitted ${urls.length} URLs to IndexNow`,
      submittedUrls: urls 
    });
  } catch (error) {
    console.error('Reindex API Error:', error);
    return NextResponse.json({ success: false, error: 'Failed to submit to IndexNow' }, { status: 500 });
  }
}
