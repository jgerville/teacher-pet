import axios from "axios";

export const createClass = async (klass) => {
  const response = await axios.post("/api/classes", klass);
  return response.data;
};

