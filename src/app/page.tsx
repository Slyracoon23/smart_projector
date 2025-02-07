"use client";
import { useEffect, useRef } from "react";

// Static content configuration
const iframeContent = {
  selectors: {
    mainHeading: '.MuiTypography-h1',
    serviceDescription: '.check-list p',
    logo: '.css-1p8i6qr',
    subHeading: '.css-1l3awos',
    subDescription: '.css-1tl8prx',
  },
  content: {
    mainHeading: "The best way to manage contractors across the globe",
    serviceDescription: "Manage contractors easier than ever. Even minimize your misclassification risks with delayed projects and missed deadlines. automate onboarding, managing and tracking in minutes.",
    logo: '/SmartProjector.svg',
    subHeading: "The only project management platform with everything you need, for everyone",
    subDescription: "We're making global team management so easy, businesses don't need to think twice. Whether you want to hire contractors in the Pakistan, India, or Ukraine — SmartProjector makes the whole process automatic and simple (while keeping you efficient)",
  }
};

export default function Home() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe && iframe.contentWindow) {
      iframe.onload = () => {
        try {
          const iframeDocument = iframe.contentWindow?.document;
          
          // Update content using the static configuration
          Object.entries(iframeContent.selectors).forEach(([key, selector]) => {
            const element = iframeDocument.querySelector(selector);
            if (element) {
              if (key === 'logo') {
                // Special handling for logo SVG - 3x larger than original
                const img = iframeDocument.createElement('img');
                img.src = iframeContent.content[key];
                img.width = 69 * 2;  // 207px
                img.height = 26 * 2; // 78px
                element.parentNode?.replaceChild(img, element);
              } else {
                element.textContent = iframeContent.content[key as keyof typeof iframeContent.content];
              }
            }
          });
        } catch (error) {
          console.error("Error modifying iframe content:", error);
        }
      };
    }
  }, []);

  return (
    <div className="w-full h-screen">
      <iframe 
        ref={iframeRef}
        src="/static_website/index.html"
        className="w-full h-full border-0"
        title="Static Website"
      />
    </div>
  );
}
