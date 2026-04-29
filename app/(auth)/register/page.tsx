import Image from "next/image";
import Icon from "@/app/__components/Icon";
import Link from "next/link";

export default function Register() {
  return (
    <>
      <main className="flex-grow grid lg:grid-cols-2 min-h-screen overflow-hidden">
        <section className="hidden lg:flex flex-col justify-between p-12 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div
              className="absolute top-0 left-0 w-full h-full"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                backgroundSize: "40px 40px",
              }}
            ></div>
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-12">
              <div className="w-10 h-10 bg-primary-fixed rounded-xl flex items-center justify-center">
                <Icon name="waves" className="text-primary" />
              </div>
              <Link
                href="/"
                prefetch={false}
                className="font-headline font-extrabold text-2xl tracking-tighter text-white"
              >
                FluidSteward
              </Link>
            </div>
            <div className="max-w-md">
              <h1 className="font-headline text-5xl font-bold text-white leading-tight mb-6">
                Optimisez votre flux, naturellement.
              </h1>
              <p className="text-primary-fixed text-lg font-medium leading-relaxed">
                Rejoignez des centaines de PME qui transforment leur logistique
                avec une approche axée sur la durabilité et l'efficacité fluide.
              </p>
            </div>
          </div>
          <div className="relative z-10 grid grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <Icon name="bolt" className="text-primary-fixed mb-2" />
              <h3 className="text-white font-bold text-lg">
                Onboarding Express
              </h3>
              <p className="text-white/70 text-sm">
                Prêt en moins de 5 minutes pour votre première route.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <Icon name="eco" className="text-primary-fixed mb-2" />
              <h3 className="text-white font-bold text-lg">-30% d'émissions</h3>
              <p className="text-white/70 text-sm">
                Économisez du carburant grâce à nos algorithmes organiques.
              </p>
            </div>
          </div>
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-primary-container rounded-full blur-3xl opacity-50"></div>
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoUUivL0rqJarQI5MqrqYBg0BSmEOp4fi9FsA1YW-kXA3m5c3k7dz-6fbRrmYbu-d4xW4jgkYsgJSWZt0xICntaryHPniiWc8i4Kld4AUo61q2ivnDF0mtPiMIxNKaz-tdmc6pbKTiaKYHR1bfpRu_c8HLzMxY_dON-QD3mbAvyixypLbNB35xzZhkYDLU7vpbV8axWC_v7fN5viryM_GE2yCf8mU15kGrHEOvM777tsdJ9xXkhpzJo2hS7pX9-s8UZzJxqtL0iOo"
            alt="professional warehouse manager using a digital tablet in a sunlit modern logistics hub"
            fill
            className="absolute bottom-0 right-0 w-3/4 object-cover rounded-tl-[4rem] shadow-2xl"
          />
        </section>
        <section className="flex flex-col justify-center items-center p-6 md:p-12 lg:p-24 bg-surface-bright">
          <div className="w-full max-w-md">
            <div className="mb-8 lg:hidden flex justify-center">
              <Link
                href="/"
                prefetch={false}
                className="font-headline font-extrabold text-xl tracking-tighter text-primary"
              >
                FluidSteward
              </Link>
            </div>
            <div className="mb-10 text-center lg:text-left">
              <h2 className="font-headline text-3xl font-extrabold text-on-background mb-2">
                Créez votre compte
              </h2>
              <p className="text-secondary font-medium">
                Commencez votre transition écologique aujourd'hui.
              </p>
            </div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label
                    className="block text-sm font-semibold text-secondary"
                    htmlFor="company"
                  >
                    Nom de l'entreprise
                  </label>
                  <div className="relative">
                    <Icon
                      name="business"
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-outline"
                    />
                    <input
                      className="w-full pl-12 pr-4 py-4 bg-surface-container-high rounded-xl border-none focus:ring-2 focus:ring-primary text-on-surface placeholder:text-outline-variant transition-all"
                      id="company"
                      name="company"
                      placeholder="Fluid Logistique SAS"
                      type="text"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    className="block text-sm font-semibold text-secondary"
                    htmlFor="full_name"
                  >
                    Nom complet
                  </label>
                  <div className="relative">
                    <Icon
                      name="person"
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-outline"
                    />
                    <input
                      className="w-full pl-12 pr-4 py-4 bg-surface-container-high rounded-xl border-none focus:ring-2 focus:ring-primary text-on-surface placeholder:text-outline-variant transition-all"
                      id="full_name"
                      name="full_name"
                      placeholder="Jean Dupont"
                      type="text"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    className="block text-sm font-semibold text-secondary"
                    htmlFor="email"
                  >
                    Adresse email professionnelle
                  </label>
                  <div className="relative">
                    <Icon
                      name="mail"
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-outline"
                    />
                    <input
                      className="w-full pl-12 pr-4 py-4 bg-surface-container-high rounded-xl border-none focus:ring-2 focus:ring-primary text-on-surface placeholder:text-outline-variant transition-all"
                      id="email"
                      name="email"
                      placeholder="jean@entreprise.fr"
                      type="email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    className="block text-sm font-semibold text-secondary"
                    htmlFor="password"
                  >
                    Mot de passe
                  </label>
                  <div className="relative">
                    <Icon
                      name="lock"
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-outline"
                    />
                    <input
                      className="w-full pl-12 pr-12 py-4 bg-surface-container-high rounded-xl border-none focus:ring-2 focus:ring-primary text-on-surface placeholder:text-outline-variant transition-all"
                      id="password"
                      name="password"
                      placeholder="••••••••"
                      type="password"
                    />
                    <button
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-primary"
                      type="button"
                    >
                      <Icon name="visibility" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex items-center h-5">
                  <input
                    className="h-5 w-5 rounded bg-surface-container-high border-none text-primary focus:ring-primary cursor-pointer"
                    id="terms"
                    name="terms"
                    type="checkbox"
                  />
                </div>
                <div className="text-sm">
                  <label className="text-secondary font-medium" htmlFor="terms">
                    J'accepte les{" "}
                    <a
                      className="text-primary font-bold hover:underline"
                      href="#"
                    >
                      Conditions d'utilisation
                    </a>{" "}
                    et la{" "}
                    <a
                      className="text-primary font-bold hover:underline"
                      href="#"
                    >
                      Politique de confidentialité
                    </a>
                    .
                  </label>
                </div>
              </div>
              <button
                className="w-full py-4 px-6 bg-gradient-to-br from-primary to-primary-container text-white font-headline font-bold text-lg rounded-xl shadow-lg shadow-primary/20 active:scale-95 transition-all duration-200"
                type="submit"
              >
                Créer mon compte
              </button>
            </form>
            <p className="mt-8 text-center text-sm text-secondary">
              Vous avez déjà un compte ?
              <a
                className="text-primary font-extrabold hover:underline"
                href="#"
              >
                {" Se connecter"}
              </a>
            </p>
            <div className="mt-12 p-4 bg-primary-fixed/20 rounded-xl flex items-center gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary-fixed rounded-full flex items-center justify-center">
                <Icon name="speed" className="text-primary" />
              </div>
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest">
                  Étape suivante
                </p>
                <p className="text-on-surface text-sm font-medium">
                  Importez votre flotte en 1 clic après l'inscription.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
