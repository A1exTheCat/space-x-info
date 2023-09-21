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
    limit: 10,
    page: 1,
  },
};
