"use client";

import { login } from "@/app/actions/auth/login";
import { useActionState } from "react";

export default function LoginForm() {
  const [state, formAction] = useActionState(login, undefined);

  return (
    <form className="space-y-6" action={formAction}>
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
            defaultValue={state?.values?.email || ''} 
            required={true}
            type="email"
          />
          {state?.errors?.email && (
            <p className="text-sm text-red-600">{state.errors.email}</p>
          )}
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
            Mot de passe oublié ?
          </a>
        </div>
        <div className="relative">
          <input
            className="w-full h-12 px-4 rounded-lg bg-surface-container-high border-none focus:ring-2 focus:ring-primary transition-all text-on-surface placeholder:text-outline"
            id="password"
            name="password"
            defaultValue={state?.values?.password || ''} 
            placeholder="••••••••"
            required={true}
            type="password"
          />
          {state?.errors?.password && (
            <p className="text-sm text-red-600">{state.errors.password}</p>
          )}
        </div>
      </div>
      <button
        className="w-full h-12 bg-linear-to-br from-primary to-primary-container text-on-primary font-semibold rounded-full hover:opacity-90 active:scale-95 transition-all shadow-md flex items-center justify-center gap-2"
        type="submit"
      >
        Se connecter
        <span className="material-symbols-outlined text-sm" data-icon="login">
          login
        </span>
      </button>
      {state?.message && (
        <p className="text-sm text-red-600">{state?.message}</p>
      )}
    </form>
  );
}
