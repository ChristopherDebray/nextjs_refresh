import Link from "next/link";

export default function Login() {
  return (
    <>
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-primary-fixed/20 blur-[120px]"></div>
        <div className="absolute bottom-[5%] right-[0%] w-[35%] h-[35%] rounded-full bg-tertiary-fixed/20 blur-[100px]"></div>
      </div>
      <main className="relative z-10 grow flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="mb-10 text-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <span
                className="material-symbols-outlined text-primary text-3xl"
                data-icon="waves"
              >
                waves
              </span>
              <Link
                href="/"
                prefetch={false}
                className="font-headline font-extrabold text-2xl tracking-tighter text-primary"
              >
                FluidSteward
              </Link>
            </div>
            <h1 className="text-on-surface font-headline font-bold text-3xl tracking-tight">
              Bienvenue
            </h1>
            <p className="text-secondary mt-2">
              Gérez vos flux numériques avec conscience écologique.
            </p>
          </div>
          <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm ring-1 ring-outline-variant/15">
            <form className="space-y-6">
              <div className="space-y-2">
                <label
                  className="block font-label text-sm font-medium text-secondary"
                  htmlFor="email"
                >
                  Adresse email
                </label>
                <div className="relative">
                  <input
                    className="w-full h-12 px-4 rounded-lg bg-surface-container-high border-none focus:ring-2 focus:ring-primary transition-all text-on-surface placeholder:text-outline"
                    id="email"
                    name="email"
                    placeholder="nom@exemple.com"
                    required=""
                    type="email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label
                    className="block font-label text-sm font-medium text-secondary"
                    htmlFor="password"
                  >
                    Mot de passe
                  </label>
                  <a
                    className="text-xs font-semibold text-primary hover:text-primary-container transition-colors"
                    href="#"
                  >
                    Oublié ?
                  </a>
                </div>
                <div className="relative">
                  <input
                    className="w-full h-12 px-4 rounded-lg bg-surface-container-high border-none focus:ring-2 focus:ring-primary transition-all text-on-surface placeholder:text-outline"
                    id="password"
                    name="password"
                    placeholder="••••••••"
                    required=""
                    type="password"
                  />
                </div>
              </div>
              <div className="flex items-center">
                <input
                  className="h-4 w-4 rounded border-none bg-surface-container-high text-primary focus:ring-primary"
                  id="remember"
                  name="remember"
                  type="checkbox"
                />
                <label
                  className="ml-2 block text-sm text-secondary"
                  htmlFor="remember"
                >
                  Se souvenir de moi
                </label>
              </div>
              <button
                className="w-full h-12 bg-gradient-to-br from-primary to-primary-container text-on-primary font-semibold rounded-full hover:opacity-90 active:scale-95 transition-all shadow-md flex items-center justify-center gap-2"
                type="submit"
              >
                Se connecter
                <span
                  className="material-symbols-outlined text-sm"
                  data-icon="login"
                >
                  login
                </span>
              </button>
            </form>
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-outline-variant/20"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-2 bg-surface-container-lowest text-outline font-medium">
                  OU
                </span>
              </div>
            </div>
            <div className="text-center">
              <p className="text-sm text-secondary">
                Nouveau sur FluidSteward ?
                <Link
                  href="/register"
                  prefetch={false}
                  className="text-primary font-bold hover:text-primary-container transition-colors"
                >
                  {" Créer un compte"}
                </Link>
              </p>
            </div>
          </div>
          <div className="mt-12 flex justify-center gap-6 text-xs text-outline font-medium">
            <Link
              href="/"
              prefetch={false}
              className="hover:text-secondary transition-colors"
            >
              Politique de confidentialité
            </Link>
            <Link
              href="/"
              prefetch={false}
              className="hover:text-secondary transition-colors"
            >
              Conditions d'utilisation
            </Link>
          </div>
        </div>
      </main>
      
    </>
  );
}
