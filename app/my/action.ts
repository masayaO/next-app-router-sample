"use server";

import { removeBookmark } from "@/app/repository";
import { revalidatePath } from "next/cache";

export async function remove(id: number) {
  await removeBookmark(id);
  revalidatePath("/my");
}
