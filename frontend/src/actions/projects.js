import axios from "axios";

export const fetchActiveProjects = async () => {
  const res = await axios.get("/api/projects/active");
  return res.data;
};

export const fetchInactiveProjects = async () => {
  const res = await axios.get("/api/projects/inactive");
  return res.data;
};

export const putProject = async (projectId) => {
  //console.log(projectId);
  const res = await axios.put(`/api/projects/${projectId}`, { status: "open" });
  console.log(res.data.json);
};
