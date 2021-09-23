import { ApiFetcherOptions, ApiFetcherResults } from "@common/types/api";
import { API_URL } from "@framework/const";

const fetchApi = async <T>({
  query,
  variables,
}: ApiFetcherOptions): Promise<ApiFetcherResults<T>> => {
  const res = await fetch(API_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
  });
  const { data, error } = await res.json();
  if (error) {
    throw new Error(error[0].message ?? error.message);
  }
  return { data };
};

export default fetchApi;
