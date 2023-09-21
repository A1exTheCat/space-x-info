// Importing the configured Axios instance from index file
import $host from "./index";

// Importing the queryBuilder utility to construct the query body
import queryBuilder from "../utils/queryBuilder";

// fetchData is an asynchronous function that fetches data based on query parameters
export const fetchData = async (
  text, // Text query parameter (for search)
  launchStatus, // Status query parameter (e.g., "all", "successful", "failed", "upcoming")
  sorting, // Sorting query parameter (e.g., "asc", "desc")
  currentPage = 1 // Current page for pagination, defaulting to 1
) => {
  // Construct the query body using queryBuilder
  const body = queryBuilder(text, launchStatus, sorting, currentPage);

  // Making a POST request to the '/query' endpoint and destructuring the returned data
  const { data } = await $host.post("/query", body);

  // Returning the fetched data
  return data;
};
