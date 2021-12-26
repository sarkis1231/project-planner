import { DOMAIN } from "../constants/index";

export const deleteData = async <T>(url: string): Promise<T> => {
  try {
    const res = await fetch(`${DOMAIN}${url}`, { method: "DELETE" });
    const data = await res.json();
    return data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    return err;
  }
};
