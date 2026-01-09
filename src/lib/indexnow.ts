export async function submitToIndexNow(urls: string[]) {
  const host = 'hidayahcompanion.pro';
  const key = '25c6c745778a48b99c07147820658421';
  const keyLocation = `https://${host}/${key}.txt`;

  // Deduplicate URLs
  const uniqueUrls = Array.from(new Set(urls));

  if (uniqueUrls.length === 0) return;

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        host,
        key,
        keyLocation,
        urlList: uniqueUrls,
      }),
    });

    if (!response.ok) {
        console.error('IndexNow submission failed:', response.status, response.statusText);
    } else {
        console.log(`Submitted ${uniqueUrls.length} URLs to IndexNow.`);
    }

  } catch (error) {
    console.error('Error submitting to IndexNow:', error);
  }
}
