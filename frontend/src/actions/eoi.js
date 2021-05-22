import axios from "axios";

export const fetchProjectEOIs = async (projectId) => {
  //   console.log(projectId);
  const res = await axios.get(`/api/projects/${projectId}/eois`);
  return res.data;
};
