"use client";

import Script from "next/script";

type MetaPixelProps = {
  pixelId: string;
};

/**
 * Official Meta Pixel bootstrap + PageView.
 * pixelId must come from the server layout so it resolves correctly on Railway at request/build time.
 */
export function MetaPixel({ pixelId }: MetaPixelProps) {
  const trimmed = pixelId.trim();
  if (!trimmed) {
    return null;
  }

  const isDev = process.env.NODE_ENV === "development";
  const idLiteral = JSON.stringify(trimmed);

  const inlineHtml = `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq("init", ${idLiteral});
${isDev ? 'console.log("Meta Pixel initialized");' : ""}
fbq("track", "PageView");
${isDev ? 'console.log("PageView fired");' : ""}
`.trim();

  return (
    <>
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: inlineHtml }}
      />
      <noscript>
        <img
          alt=""
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${encodeURIComponent(trimmed)}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}
