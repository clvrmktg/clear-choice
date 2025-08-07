export const handler = async () => {
  const GA_ID = process.env.GA_TRACKING_ID;
  console.log("GA_TRACKING_ID =", GA_ID);

  if (!GA_ID) {
    return {
      statusCode: 500,
      body: '// Missing GA_TRACKING_ID',
    };
  }

  const url = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  console.log("Fetching:", url);

  const res = await fetch(url);
  console.log("Status:", res.status);

  if (!res.ok) {
    const errorText = await res.text();
    console.error("Failed to fetch:", errorText);
    return {
      statusCode: 500,
      body: `// Failed to fetch gtag.js: ${res.status}`,
    };
  }

  const js = await res.text();
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/javascript; charset=UTF-8',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
    body: js,
  };
};
