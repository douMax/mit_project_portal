import axios from "axios";

export const fetchActiveProjects = async () => {
  const res = await axios.get("/api/projects/active");
  return res.data;
};

export const fetchInactiveProjects = async () => {};
