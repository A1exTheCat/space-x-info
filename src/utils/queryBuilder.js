import { queryBody } from "./consts";

const queryBuilder = (name, launchStatus, sorting, page) => {
  console.log(name, launchStatus, sorting, page);
  const newBody = JSON.parse(JSON.stringify(queryBody));
  if (name !== "") {
    newBody.query.name = {
      $regex: name,
      $options: "i",
    };
  }

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

  if (page !== 1) {
    newBody.options.page = page;
  }
  return newBody;
};

export default queryBuilder;
