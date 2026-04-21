import Link from "next/link";

export function NavBar() {
  return (
    <header className="bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl docked full-width top-0 sticky z-50 no-border shadow-none">
      <nav className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        <div className="text-xl font-extrabold tracking-tighter text-green-900 dark:text-green-50 font-manrope">
          FluidSteward
        </div>
        <div className="hidden md:flex items-center gap-8 font-manrope font-semibold tracking-tight text-sm">
          <Link
            href="/"
            prefetch={false}
            className="text-green-700 font-bold border-b-2 border-green-700 pb-1 hover:text-green-800 transition-all duration-200"
          >
            Solutions
          </Link>
          <Link
            href="/"
            prefetch={false}
            className="text-zinc-600 dark:text-zinc-400 hover:text-green-800 dark:hover:text-green-200 transition-all duration-200"
          >
            Fleet Ops
          </Link>
          <Link
            href="/"
            prefetch={false}
            className="text-zinc-600 dark:text-zinc-400 hover:text-green-800 dark:hover:text-green-200 transition-all duration-200"
          >
            Sustainability
          </Link>
          <Link
            href="/"
            prefetch={false}
            className="text-zinc-600 dark:text-zinc-400 hover:text-green-800 dark:hover:text-green-200 transition-all duration-200"
          >
            Pricing
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            prefetch={false}
            className="text-zinc-600 dark:text-zinc-400 font-manrope font-semibold text-sm active:scale-95 transition-transform"
          >
            Login
          </Link>
          <Link
            href="/register"
            prefetch={false}
            className="bg-primary text-on-primary px-5 py-2.5 rounded-xl font-manrope font-bold text-sm active:scale-95 transition-transform hover:opacity-90 shadow-sm"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
}
