import Link from "next/link";
import LoginForm from "./LoginForm";

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
            <LoginForm />
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
