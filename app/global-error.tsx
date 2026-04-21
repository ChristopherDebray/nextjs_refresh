"use client";
import { NavBar } from "./__components/NavBar";
import Footer from "./__components/Footer";
import ErrorPageContent from "./__components/ErrorPageContent";

export default function GlobalError({ reset }: { reset: () => void }) {
  // Wrap html / body are required by Next.js for global error boundaries
  return (
    <html>
      <body>
        <NavBar />
        <ErrorPageContent reset={reset} />
        <Footer />
      </body>
    </html>
  );
}
