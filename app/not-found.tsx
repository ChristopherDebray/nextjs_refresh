import Image from "next/image";
import { NavBar } from "./__components/NavBar";
import Footer from "./__components/Footer";
import Icon from "./__components/Icon";

export default function NotFound() {
  return (
    <>
      <NavBar />
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
                <Icon name="route" className="text-[200px]" />
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
                <Icon
                  name="arrow_back"
                  className="transition-transform group-hover:-translate-x-1"
                />
                Retour au Dashboard
              </a>
              <a
                className="px-8 py-4 bg-surface-container-low text-secondary font-headline font-semibold rounded-full hover:bg-surface-container-high transition-colors active:scale-95 flex items-center gap-2"
                href="/help"
              >
                <Icon name="help_center" />
                Besoin d'aide ?
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
