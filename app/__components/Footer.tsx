import Link from "next/link";
import Icon from "./Icon";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200/50 w-full mt-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 max-w-screen-2xl mx-auto">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Icon name="eco" className="text-primary text-xl" />
            <span className="font-headline font-bold text-slate-900">
              EcoFleet Logistics
            </span>
          </div>
          <p className="text-slate-500 font-body text-sm max-w-sm">
            © 2024 EcoFleet Logistics. Committed to Fluid Stewardship.
            High-precision logistics for a sustainable future.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-4 md:justify-end items-center">
          <Link
            href="/"
            prefetch={false}
            className="text-slate-500 hover:text-green-700 transition-colors font-body text-sm cursor-pointer"
          >
            Privacy Policy
          </Link>
          <Link
            href="/"
            prefetch={false}
            className="text-slate-500 hover:text-green-700 transition-colors font-body text-sm cursor-pointer"
          >
            Terms of Service
          </Link>
          <Link
            href="/"
            prefetch={false}
            className="text-slate-500 hover:text-green-700 transition-colors font-body text-sm cursor-pointer"
          >
            Help Center
          </Link>
          <Link
            href="/"
            prefetch={false}
            className="text-slate-500 hover:text-green-700 transition-colors font-body text-sm cursor-pointer"
          >
            Fleet Status
          </Link>
        </div>
      </div>
    </footer>
  );
}
