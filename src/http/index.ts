// Importing the axios library for making HTTP requests
import axios from "axios";

// Importing the base URL constant from the utils folder
import { baseUrl as url } from "../utils/consts";

// Creating an Axios instance with the base URL configuration
const $host = axios.create({
  baseURL: url,
});

// Exporting the configured Axios instance for use in other parts of the application
export default $host;
