import React, { useState } from "react";
import styled from "styled-components";

import logoImg from "./assets/logo.svg";

import PokerForm from "./components/PokerForm";
import * as Api from "./service/api/PokerApi";

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2em calc(50% - 460px);
`;

const Logo = styled.img`
  height: 80px;
`;

const App = () => {
  const [handWinner, setHandWinner] = useState(0);

  const handleSubmit = values => {
    Api.checkHand(values.hand1, values.hand2).then(result => {
      setHandWinner(result.handWinner);
    });
  };

  return (
    <MainContainer>
      <Logo src={logoImg} />
      <PokerForm handleSubmit={handleSubmit} />
      {handWinner > 0 && `The hand winner is: ${handWinner}`}
    </MainContainer>
  );
};

export default App;
