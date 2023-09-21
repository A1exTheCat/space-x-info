import $host from "./index";
import queryBuilder from "../utils/queryBuilder";

export const fetchData = async (
  text,
  launchStatus,
  sorting,
  currentPage = 1
) => {
  const body = queryBuilder(text, launchStatus, sorting, currentPage);

  const { data } = await $host.post("/query", body);
  return data;
};
