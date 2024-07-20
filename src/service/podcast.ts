/* eslint-disable @typescript-eslint/no-explicit-any */

import { getPodcastApi, getPodcastByIdApi } from "@/API/Api";

export async function getAllPodcastService() {
  try {
    const response = await fetch(getPodcastApi, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
}
export async function getPodcastByIdService(id:string) {
  try {
    const response = await fetch(getPodcastByIdApi(id), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
}
