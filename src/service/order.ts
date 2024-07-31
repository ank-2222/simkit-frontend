/* eslint-disable @typescript-eslint/no-explicit-any */
import { getOrderListApi } from "@/API/Api";
import { orderError } from "@/Enums/error";

export async function getAllOrderService() {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error(orderError.TOKEN_NOT_FOUND);
    }
    const response = await fetch(getOrderListApi, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    });

    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
}
