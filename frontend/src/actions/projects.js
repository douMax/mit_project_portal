import axios from "axios";

export const fetchActiveProjects = async () => {
  const res = await axios.get("/api/projects/active");
  return res.data;
};

export const fetchInactiveProjects = async () => {
  const res = await axios.get("/api/projects/inactive");
  return res.data;
};

export const putProject = async (projectId, change) => {
  // console.log(projectId);
  // console.log(change);
  const res = await axios.put(`/api/projects/${projectId}`, change);
  //console.log(res.data.json);
};
