// Importing the configured Axios instance from index file
import $host from "./index";
import { LaunchStatus, Sorting } from "../utils/queryBuilder";
import { QueryBody, FetchedData } from "../utils/consts";

// Importing the queryBuilder utility to construct the query body
import queryBuilder from "../utils/queryBuilder";

// fetchData is an asynchronous function that fetches data based on query parameters
export const fetchData = async (
  text: string | undefined, launchStatus: LaunchStatus, sorting: Sorting, currentPage: number
): Data => {
  // Construct the query body using queryBuilder
  const body: QueryBody = queryBuilder(text, launchStatus, sorting, currentPage);

  // Making a POST request to the '/query' endpoint and destructuring the returned data
  const { data } = await $host.post("/query", body);

  // Returning the fetched data
  return data;
};
