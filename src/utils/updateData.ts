/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { DOMAIN } from "../constants/index";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const updateData = async <T>(url: string, body: any): Promise<T> => {
  try {
    const res = await fetch(`${DOMAIN}${url}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    return data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    return err;
  }
};
