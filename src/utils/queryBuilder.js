import { queryBody } from "./consts";

const queryBuilder = (name, launchStatus, sorting, page = 1) => {
  if (name !== "") {
    queryBody.query.name = {
      $regex: name,
      $options: "i",
    };
  }

  switch (launchStatus) {
    case "success":
      queryBody.query.success = true;
      break;
    case "failed":
      queryBody.query.success = false;
      break;
    case "upcoming":
      queryBody.query.upcoming = true;
      break;
    default:
      break;
  }

  switch (sorting) {
    case "a...z":
      queryBody.options.sort = {
        name: 1,
      };
      break;
    case "z...a":
      queryBody.options.sort = {
        name: -1,
      };
      break;
    case "old_to_new":
      queryBody.options.sort = {
        date_utc: 1,
      };
      break;
    case "new_to_old":
      queryBody.options.sort = {
        date_utc: -1,
      };
      break;
    default:
      break;
  }

  if (page !== 1) {
    queryBody.page = page;
  }

  return queryBody;
};

export default queryBuilder;
