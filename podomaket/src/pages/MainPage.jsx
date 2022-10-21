import React from "react";
import Layout from "../components/Layout";
import Main from "../components/Main";
import GlobalStyles from "../style/GlobalStyles";

const MainPage = () => {
  return (
    <div>
      <GlobalStyles />
      <Layout>
        <Main />
      </Layout>
    </div>
  );
};

export default MainPage;
