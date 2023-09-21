import $host from "./index";
import queryBuilder from "../utils/queryBuilder";

export const fetchData = async (dataQuery) => {
  const { name, launchStatus, sorting } = dataQuery;

  const body = queryBuilder(name, launchStatus, sorting);

  const { data } = await $host.post("/query", body);
  return data;
};
