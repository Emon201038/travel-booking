import React from "react";
import Head from "./Head";
import Section from "./Section";
import { connect } from "react-redux";

const Home = () => {
  return (
    <>
      <Head />
      <Section />
    </>
  );
};

export default Home;
connect()(Home);
