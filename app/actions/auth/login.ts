"use server";
import { createSession } from "@/app/__lib/auth/session";
import { FormState, LoginFormSchema } from "@/app/__lib/schemas/auth/login";
import { ApiError, apiRequest, postFetch } from "@/app/__lib/services/api";
import { AuthResponseDto } from "@/app/__lib/types/auth";
import { redirect } from "next/navigation";

export async function login(
  state: FormState,
  formData: FormData,
): Promise<FormState> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const validatedFields = LoginFormSchema.safeParse({
    email,
    password,
  });

  if (!validatedFields.success) {
    const errors = validatedFields.error.flatten().fieldErrors;

    return {
      errors: {
        email: errors.email?.[0],
        password: errors.password?.[0],
      },
      values: { email, password },
    };
  }

  try {
    const response = await postFetch<AuthResponseDto>("/auth/login", {
      body: JSON.stringify(validatedFields.data),
    });

    if (response.isSuccess) {
      await createSession(response.data);
    } else {
      return {
        values: { email, password },
        message: "Identifiants incorrects",
      };
    }
  } catch (error) {
    if (error instanceof ApiError) {
      return {
        values: { email, password },
        message: error.message,
      };
    }

    return {
      values: { email, password },
      message: "Une erreur inattendue est survenue",
    };
  }
  
  // Redirect throws an error so it must be outside of try / catch
  redirect('/dashboard');
}
