"use server";

import { revalidatePath } from "next/cache";

export async function refreshData() {
  revalidatePath("/"); // Revalidate homepage
}
