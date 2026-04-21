"use client";
import Image from "next/image";

export default function Error() {
  return (
    <>
      <main className="grow flex items-center justify-center px-6 py-12 relative overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] rounded-full bg-primary/5 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[30vw] h-[30vw] rounded-full bg-tertiary/5 blur-[100px]"></div>
        <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
          <div className="md:col-span-5 order-2 md:order-1">
            <div className="relative aspect-square rounded-full overflow-hidden shadow-2xl bg-surface-container-low border-12 border-surface-container-lowest">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB95_7CUE5AchJrvaB9Pwh8LcSQ8xjwEhwVCTjQ3O61T9th5dsE5LxriHDZhQ4_Ipg36MLHOxkLQbMvjQpmiGwJ28Rh3mpEqopIU9CVRgACzd_KKZsZQvPxmImF6oqJw-CqbhkdIUPirdqRPlFZMy56QitMJM4MFhgatcnddV1dBy1HKR7s4yTEOHi2mzqLhADg2P5qFogl12KqirEkcC9tax3ytWRB4HT3HlIHvR5t43uOwSalncqAp6pm3mupdS5pd4QJTqPS6so"
                alt="Calm aerial view of a winding river through a deep green forest representing fluid stewardship and natural flow"
                width={800}
                height={256}
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-transparent"></div>
            </div>
            <div className="-mt-10 relative z-20 ml-auto mr-4 bg-surface-container-lowest/90 glass-effect p-4 rounded-xl shadow-lg border-l-4 border-primary max-w-55">
              <div className="flex items-center gap-3">
                <span
                  className="material-symbols-outlined text-primary"
                  data-icon="engineering"
                >
                  engineering
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-secondary font-bold">
                    Status Update
                  </p>
                  <p className="text-sm font-semibold text-on-surface">
                    Intervention en cours
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-7 order-1 md:order-2 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label text-xs font-semibold tracking-wide">
              <span
                className="material-symbols-outlined text-sm"
                data-icon="error"
              >
                error
              </span>
              SYSTÈME EN MAINTENANCE
            </div>
            <div className="space-y-4">
              <h1 className="font-headline text-5xl md:text-6xl font-extrabold text-on-surface tracking-tight leading-[1.1]">
                Une erreur est <br />
                <span className="text-primary">survenue.</span>
              </h1>
              <p className="text-secondary text-lg md:text-xl max-w-lg leading-relaxed">
                Nos équipes techniques travaillent pour rétablir le flux.
                Sillage Direct assure la continuité de votre intendance avec
                soin.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="flex items-center justify-center gap-3 bg-linear-to-br from-primary to-primary-container text-on-primary px-8 py-4 rounded-xl font-semibold shadow-lg shadow-primary/20 active:scale-95 transition-all duration-200 cursor-pointer">
                <span className="material-symbols-outlined" data-icon="refresh">
                  refresh
                </span>
                Rafraîchir la page
              </button>
              <button className="flex items-center justify-center gap-3 bg-surface-container-lowest border border-outline-variant/15 text-secondary px-8 py-4 rounded-xl font-semibold hover:bg-surface-container-low active:scale-95 transition-all duration-200 cursor-pointer">
                <span
                  className="material-symbols-outlined"
                  data-icon="support_agent"
                >
                  support_agent
                </span>
                Contacter le support
              </button>
            </div>
            <div className="pt-12">
              <div className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/10">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-bold text-secondary uppercase tracking-widest">
                    Temps de rétablissement estimé
                  </span>
                  <span className="text-xs font-bold text-primary">
                    85% Prêt
                  </span>
                </div>
                <div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-linear-to-r from-primary to-tertiary w-[85%] rounded-full"></div>
                </div>
                <p className="mt-4 text-xs text-secondary leading-relaxed italic">
                  "La nature ne se presse pas, pourtant tout est accompli." –
                  Lao Tzu
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-slate-50 border-t border-slate-200/50 w-full mt-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 max-w-screen-2xl mx-auto">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span
                className="material-symbols-outlined text-primary text-xl"
                data-icon="eco"
              >
                eco
              </span>
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
            <a className="text-slate-500 hover:text-green-700 transition-colors font-body text-sm cursor-pointer">
              Privacy Policy
            </a>
            <a className="text-slate-500 hover:text-green-700 transition-colors font-body text-sm cursor-pointer">
              Terms of Service
            </a>
            <a className="text-slate-500 hover:text-green-700 transition-colors font-body text-sm cursor-pointer">
              Help Center
            </a>
            <a className="text-slate-500 hover:text-green-700 transition-colors font-body text-sm cursor-pointer">
              Fleet Status
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
