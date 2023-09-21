// Base URL for SpaceX API v5 launches endpoint
export const baseUrl = "https://api.spacexdata.com/v5/launches";

// Initial query body to be sent in the POST request to the SpaceX API
// Specifies the fields to be selected and initial pagination settings
export const queryBody = {
  query: {}, // Empty query to fetch all data by default
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
    limit: 10, // Limiting the number of records to 20 per page
    page: 1, // Starting from the first page
  },
};

// Array of buttons to filter data by launch status
export const statusButtons = [
  { name: "All", value: "all" },
  { name: "Success", value: "success" },
  { name: "Failed", value: "failed" },
  { name: "Upcoming", value: "upcoming" },
];

// Array of buttons to sort data by different criteria
export const sortBtn = [
  { name: "Launch date (Old to recent)", value: "old_to_new" },
  { name: "Launch date (Recent to old)", value: "new_to_old" },
  { name: "Mission name (A-Z)", value: "a...z" },
  { name: "Mission name (Z-A)", value: "z...a" },
];
