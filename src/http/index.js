import axios from "axios";
import { baseUrl as url } from "../utils/consts";

const $host = axios.create({
  baseURL: url,
});

export default $host;
