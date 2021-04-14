import React from "react";
import styled from "styled-components";
const HomePage = () => {
  return (
    <Styles>
      <div className="homepage">home page</div>
    </Styles>
  );
};

const Styles = styled.div`
  .homepage {
    width: 100%;
    height: 80vh;
    background-color: pink;
  }
`;

export default HomePage;
