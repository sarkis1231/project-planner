import { DOMAIN } from "../constants/index";

export const fetchData = async <T>(url: string): Promise<T> => {
  try {
    const res = await fetch(`${DOMAIN}${url}`);
    const data = await res.json();
    return data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    return err;
  }
};
