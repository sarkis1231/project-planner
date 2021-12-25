export const fetchData = async (url: string): Promise<unknown> => {
  try {
    const res = await fetch(`http://localhost:3000/${url}`);
    const data = await res.json();
    return data;
  } catch (err: unknown) {
    return err;
  }
};
