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
  const res = await axios.put(`/api/projects/${projectId}`, change);
  return res.data;
};

export const addProject = async (newProject) => {
  //console.log(newProject);
  //console.log(JSON.stringify(newProject));
  const res = axios.post("/api/projects", newProject);
  return res.data;
};
