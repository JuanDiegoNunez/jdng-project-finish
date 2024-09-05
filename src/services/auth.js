"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function login({ email, password }) {
  const supabase = createClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (!error) {
    revalidatePath("/");
    redirect("/");
  } else {
    //redirccionar a pagina de error//
  }
}

export async function signup({ email, password }) {
  const supabase = createClient();
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (!error) {
    revalidatePath("/");
    redirect("/");
  }
}
