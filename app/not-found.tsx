import Image from 'next/image'

export default function NotFound() {
  return (
    <>
      <main className="grow flex items-center justify-center relative overflow-hidden px-6 py-12">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 right-0 w-125 h-125 bg-tertiary rounded-full blur-[150px] opacity-30"></div>
          <div className="fluid-pattern absolute inset-0"></div>
        </div>
        <div className="relative z-10 max-w-2xl w-full text-center">
          <div className="space-y-8">
            <div className="inline-block">
              <h1 className="font-headline font-extrabold text-[120px] leading-none tracking-tighter text-primary/10 select-none">
                404
              </h1>
            </div>
            <div className="space-y-4">
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface tracking-tight">
                Oups ! Cette route n'existe pas.
              </h2>
              <p className="text-secondary text-lg md:text-xl max-w-lg mx-auto leading-relaxed">
                Il semblerait que vous ayez pris un mauvais virage. L'itinéraire
                que vous cherchez a été déplacé ou n'est plus en service.
              </p>
            </div>
            <div className="relative py-12 group">
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-10 transition-opacity duration-700">
                <span
                  className="material-symbols-outlined text-[200px]"
                  data-icon="route"
                >
                  route
                </span>
              </div>
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5-wc8TOSnx6VAMRSXb0u4U_axKZhHOQngCnYauVl_yFyFU9p2n3ocuNT-hP8C3lVwUv1hxSLIKdvx8DDhppMMvNLZEWRhHQfh4KvRq_1HtviZ_4kat_E4LCbtaXhiHDYA0VH06ueIVtExyGiNz4Kk-IL-S835lyX_2h4jL00zid7dxJ1vLo2ZAlIjfEeTV4Z2gTB38oBWfPPAQ-FKF6AtYxTzxQgrjCcj_jULGBkaXpGtBYa_me-7JhfCVC5qq2JZkZhpIdvekYE"
                alt="Scenic road through a misty green forest"
                width={800}
                height={256}
                className="w-full h-64 object-cover rounded-full shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out border-4 border-surface-container-lowest"
              />
            </div>
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                className="group relative px-8 py-4 bg-primary text-on-primary font-headline font-bold rounded-full transition-all duration-300 hover:shadow-[0_0_32px_0_rgba(24,106,34,0.3)] active:scale-95 flex items-center gap-2"
                href="/dashboard"
              >
                <span
                  className="material-symbols-outlined transition-transform group-hover:-translate-x-1"
                  data-icon="arrow_back"
                >
                  arrow_back
                </span>
                Retour au Dashboard
              </a>
              <a
                className="px-8 py-4 bg-surface-container-low text-secondary font-headline font-semibold rounded-full hover:bg-surface-container-high transition-colors active:scale-95 flex items-center gap-2"
                href="/help"
              >
                <span
                  className="material-symbols-outlined"
                  data-icon="help_center"
                >
                  help_center
                </span>
                Besoin d'aide ?
              </a>
            </div>
            <div className="pt-12">
              <div className="flex items-center justify-center gap-2 text-primary font-headline font-extrabold text-lg">
                EcoFleet
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-slate-50 dark:bg-slate-950 w-full mt-auto py-12 border-t border-slate-200/50 dark:border-slate-800/50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 max-w-screen-2xl mx-auto">
          <div className="flex flex-col gap-4">
            <div className="font-['Manrope'] font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span
                className="material-symbols-outlined text-green-900 dark:text-green-500"
                data-icon="eco"
              >
                eco
              </span>
              EcoFleet Logistics
            </div>
            <p className="font-['Inter'] text-sm text-slate-500 dark:text-slate-400">
              © 2024 EcoFleet Logistics. Committed to Fluid Stewardship.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-4 md:justify-end items-center">
            <a className="font-['Inter'] text-sm text-slate-500 dark:text-slate-400 hover:text-green-700 dark:hover:text-green-300 transition-colors cursor-pointer">
              Privacy Policy
            </a>
            <a className="font-['Inter'] text-sm text-slate-500 dark:text-slate-400 hover:text-green-700 dark:hover:text-green-300 transition-colors cursor-pointer">
              Terms of Service
            </a>
            <a className="font-['Inter'] text-sm text-slate-500 dark:text-slate-400 hover:text-green-700 dark:hover:text-green-300 transition-colors cursor-pointer">
              Help Center
            </a>
            <a className="font-['Inter'] text-sm text-slate-500 dark:text-slate-400 hover:text-green-700 dark:hover:text-green-300 transition-colors cursor-pointer">
              Fleet Status
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
