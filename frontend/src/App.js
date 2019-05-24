import React from "react";
import styled from "styled-components";

import PokerForm from "./components/PokerForm";
import * as Api from "./service/api/PokerApi";

const MainContainer = styled.div`
  padding: 2em calc(50% - 460px);
`;

const App = () => {
  const handleSubmit = values => {
    Api.checkHand(...values).then(result => {
      console.log(result);
    });
  };

  return (
    <MainContainer>
      <PokerForm handleSubmit={handleSubmit} />
    </MainContainer>
  );
};

export default App;
