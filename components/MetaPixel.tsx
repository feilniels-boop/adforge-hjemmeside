"use client";

import Script from "next/script";
import { getMetaPixelId } from "@/lib/meta-pixel";

export function MetaPixel() {
  const pixelId = getMetaPixelId();

  if (!pixelId) {
    if (process.env.NODE_ENV === "development") {
      console.info("[Meta Pixel] Disabled: NEXT_PUBLIC_META_PIXEL_ID missing");
    }
    return null;
  }

  return (
    <>
      <Script id="meta-pixel-base" strategy="afterInteractive">
        {`
          !(function(f,b,e,v,n,t,s){
            if(f.fbq) return;
            n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq) f._fbq=n;
            n.push=n;
            n.loaded=!0;
            n.version='2.0';
            n.queue=[];
            t=b.createElement(e); t.async=!0;
            t.src=v;
            s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s);
          })(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${pixelId}');
          fbq('track', 'PageView');
          ${
            process.env.NODE_ENV === "development"
              ? "console.info('[Meta Pixel] Initialized + PageView fired', { pixelId: '" + pixelId + "' });"
              : ""
          }
        `}
      </Script>
      <noscript>
        <img
          alt=""
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}
