import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "Dayyian Sajid — Marketing Strategist & AI",
  description:
    "Marketing strategist based in Islamabad building AI fluency. 500,000+ views generated across brand and campaign work.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        {children}
        <Analytics />
        <script src="https://cdn.botpress.cloud/webchat/v5.0/inject.js"></script>
        <script src="https://files.bpcontent.cloud/2026/07/18/17/20260718171808-PF98DEZE.js" defer></script>
      </body>
    </html>
  );
}
