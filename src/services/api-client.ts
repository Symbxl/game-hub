import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4409cbcfb4fc4d6d8534982c08647ee2",
  },
});
