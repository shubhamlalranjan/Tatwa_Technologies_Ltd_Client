import { create } from "apisauce";

const baseURL = "http://localhost:9000";
// define the api
const http = create({
  baseURL,
  headers: {
    Accept: "application/vnd.github.v3+json",
    "Access-Control-Allow-Origin": "*",
  },
});

export default http;
