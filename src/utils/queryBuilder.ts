// Importing the initial query body template from consts.js
import { queryBody } from "./consts";
import { QueryBody } from "./consts";

export type LaunchStatus = 'success' | 'failed' | 'upcoming';
export type Sorting = 'a...z' | 'z...a' | 'old_to_new' | 'new_to_old';

// Utility function to build query for the SpaceX API based on user input and pagination info
const queryBuilder = (text: string | undefined, launchStatus: LaunchStatus, sorting: Sorting, page: number): QueryBody => {
  // Deep copy the initial query body template to modify without altering the original
  const newBody: QueryBody = JSON.parse(JSON.stringify(queryBody));

  // If text is provided, update the query to perform a text search
  if (text !== "") {
    newBody.query.$text = {
      $search: text,
    };
  }

  // Update the query based on launchStatus (success, failed, upcoming)
  switch (launchStatus) {
    case "success":
      newBody.query.success = true;
      break;
    case "failed":
      newBody.query.success = false;
      break;
    case "upcoming":
      newBody.query.upcoming = true;
      break;
    default:
      break;
  }

  // Update the sorting option based on user's choice
  switch (sorting) {
    case "a...z":
      newBody.options.sort = {
        name: 1,
      };
      break;
    case "z...a":
      newBody.options.sort = {
        name: -1,
      };
      break;
    case "old_to_new":
      newBody.options.sort = {
        date_utc: 1,
      };
      break;
    case "new_to_old":
      newBody.options.sort = {
        date_utc: -1,
      };
      break;
    default:
      break;
  }

  // If the page number is not 1, update the pagination option
  if (page !== 1) {
    newBody.options.page = page;
  }

  // Return the modified query body
  return newBody;
};

// Exporting the queryBuilder function for use in other parts of the application
export default queryBuilder;
