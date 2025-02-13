import { Layout } from "@widgets/Layout";
import {
  AboutUs,
  Contacts,
  Projects,
  Service,
  Stages,
  Welcome,
} from "@widgets/Sections";
import React from "react";

const HomePage = () => {
  return (
    <Layout>
      <Welcome />
      <AboutUs />
      <Projects />
      <Service />
      <Stages /> 
      <Contacts />
    </Layout>
  );
};

export default HomePage;
