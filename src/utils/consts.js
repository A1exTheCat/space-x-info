export const baseUrl = "https://api.spacexdata.com/v5/launches";
export const queryBody = {
  query: {},
  options: {
    select: {
      details: 1,
      flight_number: 1,
      name: 1,
      upcoming: 1,
      links: 1,
      success: 1,
      date_utc: 1,
    },
    limit: 20,
    page: 1,
  },
};
export const statusButtons = [
  { name: "All", value: "all" },
  { name: "Success", value: "success" },
  { name: "Failed", value: "failed" },
  { name: "Upcoming", value: "upcoming" },
];
export const sortBtn = [
  { name: "Launch date (Old first)", value: "old_to_new" },
  { name: "Launch date (New first)", value: "new_to_old" },
  { name: "Name (A...Z)", value: "a...z" },
  { name: "Name (Z...A)", value: "z...a" },
];
