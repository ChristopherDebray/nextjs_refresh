import Image from "next/image";
import { NavBar } from "./__components/NavBar";
import Footer from "./__components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <section className="relative pt-20 pb-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-fixed rounded-full text-on-primary-fixed text-xs font-bold mb-6 tracking-wide uppercase">
                <span className="material-symbols-outlined text-[16px]">
                  eco
                </span>
                Sustainable Logistics for SMEs
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-on-surface leading-[1.1] mb-8 tracking-tight">
                Fluid Stewardship <br />
                <span className="text-primary italic">for Modern Fleets.</span>
              </h1>
              <p className="text-lg text-secondary max-w-lg mb-10 leading-relaxed font-medium">
                Les affluents du numérique propels small and medium enterprises
                toward a greener horizon. Optimize routes, track collections,
                and reduce your carbon footprint with precision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-manrope font-extrabold text-lg flex items-center justify-center gap-2 hover:shadow-xl hover:-translate-y-1 transition-all active:scale-95">
                  Start Free Trial
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </button>
                <button className="bg-surface-container-low text-on-surface px-8 py-4 rounded-xl font-manrope font-bold text-lg border border-outline-variant/10 hover:bg-surface-container-high transition-colors">
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative">
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary-fixed/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-tertiary-fixed/30 rounded-full blur-3xl"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-700 md:block hidden">
                <Image
                  alt="Logistics Operations"
                  width={800}
                  height={600}
                  className="w-full h-150 object-cover"
                  data-alt="Modern high-tech logistics warehouse interior with bright natural lighting, tidy green shelves, and efficient organization symbolizing sustainable commerce"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfkHTMb6qLqdnBuJPpf9pTV0OMmczePeaKeWqk3HeZCp9002rvGKC9cmH84GqkAvZaBreQpfT166K4SlvI_ybvKezHTyvcFHft9RIMAHyFqK7bLsv17a0wapt-yfO482OcC_SJdF0JzucwepM7lvEnjjHDgvLi7zYtkc5xnHj4Xifz_vs_LR5R9VJg6QXOBknSDfhYLCEOBDH6kGp7cMijvOoquqPbcWVnOFvtq2J5x-7nIBTXoupQgNORItUD9ZpvWyTZB1M4qNw"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
                Designed for Purpose
              </h2>
              <p className="text-secondary max-w-2xl mx-auto font-medium">
                We replace industrial coldness with editorial clarity, focusing
                on what matters: your operational impact.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-200">
              <div className="md:col-span-8 bg-surface-container-lowest rounded-full md:rounded-3xl p-10 flex flex-col justify-between group overflow-hidden relative border border-transparent hover:border-primary/10 transition-all duration-300">
                <div className="relative z-10">
                  <span className="material-symbols-outlined text-4xl text-primary mb-6">
                    alt_route
                  </span>
                  <h3 className="text-3xl font-bold mb-4">
                    Precision Route Optimization
                  </h3>
                  <p className="text-secondary max-w-md">
                    Our algorithm reduces mileage by up to 32% while
                    prioritizing low-emission corridors and congestion-free
                    pathways.
                  </p>
                </div>
                <div className="mt-8 relative h-64 md:h-80 overflow-hidden rounded-2xl">
                  <Image
                    fill
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_jqqo9Gn58DaRdgM2HxVVOYWPc88mJsqy8e26Ckqly7MrThogtrxBWPrhEw8pc34eqj1KPETIRAmoCjyDpwWedfoRylLCCbxlVyRbmQl9XK-VQA6xCW_r--wV7qDkyGff6SIqc20nNL0S7pvfL0jP-Yp2xxoKSrdbTNv-7fcQLhX9gmir1CB58MxmOz4TEQZ3DCQxMsI87fuptaEa9hXfrhFCboSDhpTdlEgid2UHHhLo6FVlbDx0IF16JULiUcw0k6tbYq4uGTM"
                    alt="Maps and Routing"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                </div>
              </div>

              <div className="md:col-span-4 bg-primary-container text-on-primary-container rounded-full md:rounded-3xl p-10 flex flex-col justify-between overflow-hidden relative group">
                <div className="absolute inset-0 bg-linear-to-br from-primary to-primary-container opacity-50"></div>
                <div className="relative z-10">
                  <span className="material-symbols-outlined text-4xl mb-6">
                    inventory_2
                  </span>
                  <h3 className="text-2xl font-bold mb-4">
                    Clothing Container Intelligence
                  </h3>
                  <p className="opacity-90">
                    Real-time fill sensors and weight tracking for textile
                    collection networks. Never dispatch a truck to an empty bin.
                  </p>
                </div>
                <div className="relative z-10 mt-6 pt-6 border-t border-white/10">
                  <div className="flex justify-between items-center mb-2 text-sm font-bold">
                    <span>Network Fill Rate</span>
                    <span>84%</span>
                  </div>
                  <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-primary-fixed w-[84%] rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-4 bg-tertiary-container text-on-tertiary-container rounded-full md:rounded-3xl p-10 flex flex-col justify-center gap-4 relative overflow-hidden">
                <span className="material-symbols-outlined text-4xl mb-2">
                  monitoring
                </span>
                <h3 className="text-2xl font-bold">Sustainability Impact</h3>
                <p className="text-sm opacity-90 mb-4">
                  Live dashboard showing CO2 abatement, fuel savings, and
                  ecological performance scoring for your entire fleet.
                </p>
                <div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl">
                  <div className="text-4xl font-black mb-1 tracking-tighter">
                    14.2t
                  </div>
                  <div className="text-xs font-bold uppercase tracking-widest opacity-70">
                    CO2 Saved This Month
                  </div>
                </div>
              </div>

              <div className="md:col-span-8 bg-surface-container-highest rounded-full md:rounded-3xl p-10 flex flex-col md:flex-row items-center gap-8 overflow-hidden group">
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4">
                    Built for Growing Fleets
                  </h3>
                  <p className="text-on-surface-variant">
                    Scalable tools that don't require an IT army. One person can
                    manage 50 vehicles with the same ease as 5.
                  </p>
                  <ul className="mt-6 space-y-3">
                    <li className="flex items-center gap-3 text-sm font-medium">
                      <span className="material-symbols-outlined text-primary text-sm">
                        check_circle
                      </span>
                      Instant onboarding for drivers
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium">
                      <span className="material-symbols-outlined text-primary text-sm">
                        check_circle
                      </span>
                      Flexible per-vehicle pricing
                    </li>
                  </ul>
                </div>
                <div className="w-full md:w-1/2 relative h-64 md:h-auto min-h-64">
                  <Image
                    fill
                    alt="Fleet Management"
                    className="rounded-2xl object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBS9e2YBWt1J_sXD-sKCZWamX3CiStQNVVDCehhHawVmaMqlcDTmkDCdftRTpUr5hHEc4bvvOHJwrgIw5G2t2H2wg28Oh2LfF9ifFgX4G03Od6fzeT-VHi0tP3nvPwTWodkvP1zwF3X718fyhQgs2qooMxeRknmVaxNw289ptuJG_nN6ZXaQMUh-I1vyRWaJTwqUhy-I0FoqLTmqrFBfvDxuRuQ_ysmGAFlIePMU90hov98LHPdzNdlz1zWao8QvHkbzZZ3re10FTU"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              <div className="flex flex-col gap-2">
                <span className="text-display-lg text-5xl font-black text-primary font-headline tracking-tighter">
                  99.8%
                </span>
                <span className="text-secondary text-sm font-bold uppercase tracking-wider">
                  Uptime Reliability
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-display-lg text-5xl font-black text-primary font-headline tracking-tighter">
                  450+
                </span>
                <span className="text-secondary text-sm font-bold uppercase tracking-wider">
                  SMEs Optimized
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-display-lg text-5xl font-black text-primary font-headline tracking-tighter">
                  -24%
                </span>
                <span className="text-secondary text-sm font-bold uppercase tracking-wider">
                  Avg. Fuel Costs
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-display-lg text-5xl font-black text-primary font-headline tracking-tighter">
                  1.2M
                </span>
                <span className="text-secondary text-sm font-bold uppercase tracking-wider">
                  Km Saved/Year
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto bg-primary rounded-4xl p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-container rounded-full blur-[100px] -mr-48 -mt-48 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-tertiary rounded-full blur-[100px] -ml-48 -mb-48 opacity-30"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-extrabold text-on-primary mb-8 leading-tight">
                Ready to steward your fluid logistics?
              </h2>
              <p className="text-primary-fixed text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium">
                Join hundreds of SMEs transforming their fleet from a cost
                center into a sustainability champion.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="bg-surface-container-lowest text-primary px-10 py-5 rounded-xl font-manrope font-extrabold text-xl shadow-xl hover:scale-105 transition-transform active:scale-95">
                  Get Started Now
                </button>
                <button className="bg-transparent text-on-primary border-2 border-on-primary/20 hover:bg-on-primary/10 px-10 py-5 rounded-xl font-manrope font-bold text-xl transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
