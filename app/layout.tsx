import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stripe Payment Failure Alerter – Early Warning for Payment Issues",
  description: "Monitor Stripe API health, transaction success rates, and response times. Get alerted before payment failures hurt your revenue."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d912550e-4ba5-428d-bdba-58f31dbb57ba"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
