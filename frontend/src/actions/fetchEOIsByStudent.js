import axios from "axios";

const fetchEOIsByStudent = async () => {
  const data = await axios.get("/api/projects");
  return data;
};

export default fetchEOIsByStudent;
