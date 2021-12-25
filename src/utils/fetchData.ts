export const fetchData = async <T>(url: string, method = "GET"): Promise<T> => {
  const DOMAIN = "http://localhost:3000/";
  try {
    const res = await fetch(`${DOMAIN}${url}`, { method });
    const data = await res.json();
    return data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    return err;
  }
};
