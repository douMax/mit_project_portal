import React, { useState } from "react";
import styled from "styled-components";
import { Layout, Space } from "antd";

import ProjectListDetails from "./ProjectListDetails";
import SearchNSort from "./SearchNSort";

const PageTitle = styled.nav`
  margin-left: 30px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 2px;
  background-color: #f0f0f0;
`;

const BrowseProjects = () => {
  const [projects, setProjects] = useState([
    {
      projId: "1",
      title: "Automated Web Portal for Capstone Project",
      topic: "Web, Cybersecurity, Data Analytics",
      description:
        "Build an automated web portal for managing students’ capstone projects for MIT. Implement the project proposal review process.",
      status: "Open",
      year: "2021",
      trimester: "1",
      assigned_students: 0,
      eoi: 12,
      client: "MIT",
      logo: "client_logo_mit.JPG",
      background_rationale:
        "Background and Rationale for Automated Web Portal for Capstone Project.",
      resources:
        "Project Resources for Automated Web Portal for Capstone Project.",
      goals_objectives:
        "Goals and Objectives for Automated Web Portal for Capstone Project.",
    },

    {
      projId: "2",
      title: "SmartList - A solid replacement of SmartFridges",
      topic: "IoT, Mobile App, Cybersecurity",
      description:
        "Build a SmartList mobile app that interactes with fridge using wireless sensor and provides shopping list functioanlities.",
      status: "Open",
      year: "2021",
      trimester: "1",
      assigned_students: 2,
      eoi: 24,
      client: "Arif Systems",
      logo: "client_logo_arifsystems.JPG",
      background_rationale:
        "Background and Rationale for SmartList - A solid replacement of SmartFridges.",
      resources:
        "Project Resources for SmartList - A solid replacement of SmartFridges.",
      goals_objectives:
        "Goals and Objectives for SmartList - A solid replacement of SmartFridges.",
    },

    {
      projId: "3",
      title: "Instawebworks - Python-based Data Scraping",
      topic: "Data Science, Python, Data Analytics",
      description:
        "Using Twitter API to scraping data and use semantic ananylsis API to perform sentiment evaluation for business intelligence.",
      status: "Open",
      year: "2021",
      trimester: "1",
      assigned_students: 4,
      eoi: 24,
      client: "Arif Systems",
      logo: "client_logo_arifsystems.JPG",
      background_rationale:
        "Background and Rationale for Instawebworks - Python-based Data Scraping.",
      resources:
        "Project Resources for Instawebworks - Python-based Data Scraping.",
      goals_objectives:
        "Goals and Objectives for Instawebworks - Python-based Data Scraping.",
    },
  ]);

  return (
    <Layout>
      <PageTitle>Browse Projects</PageTitle>
      <SearchNSort />
      <Layout style={{ background: "#f0f0f0" }}>
        {projects.map((project) => (
          <ProjectListDetails
            projId={project.projId}
            title={project.title}
            topic={project.topic}
            description={project.description}
            status={project.status}
            year={project.year}
            trimester={project.trimester}
            assigned_students={project.assigned_students}
            eoi={project.eoi}
            client={project.client}
            logo={project.logo}
            background_rationale={project.background_rationale}
            resources={project.resources}
            goals_objectives={project.goals_objectives}
          />
        ))}
      </Layout>
    </Layout>
  );
};

export default BrowseProjects;
