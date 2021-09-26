import axios from "axios";

export const fetchProjectEOIs = async (projectId) => {
  //   (projectId);
  const res = await axios.get(`/api/projects/${projectId}/eois`);
  return res.data;
};

export const fetchUserEOIs = async (applicantId) => {
  // (userId);
  const res = await axios.get(`/api/projects/eois/${applicantId}`);
  return res.data;
};
