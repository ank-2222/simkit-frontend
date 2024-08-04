import { postContactApi } from "@/API/Api";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function postContactService(contactData: any) {
    try {
      const response = await fetch(postContactApi, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
        credentials: "include",
      });
  
      const data = await response.json();
      return data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new Error(error);
    }
  }
  