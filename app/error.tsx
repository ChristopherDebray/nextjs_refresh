"use client";
import { NavBar } from "./__components/NavBar";
import Footer from "./__components/Footer";
import ErrorPageContent from "./__components/ErrorPageContent";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <>
      <NavBar />
      <ErrorPageContent reset={reset} />
      <Footer />
    </>
  );
}
