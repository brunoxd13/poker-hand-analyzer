import React, { useState } from "react";
import styled from "styled-components";

import logoImg from "./assets/logo.png";

import PokerForm from "./components/PokerForm";
import PokerResult from "./components/PokerResult";
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
  const [handOneDescr, setHandOneDescr] = useState("");
  const [handTwoDescr, setHandTwoDescr] = useState("");

  const handleSubmit = values => {
    Api.checkHand(values.hand1, values.hand2).then(result => {
      setHandOneDescr(result.descrHandOne);
      setHandTwoDescr(result.descrHandTwo);
      setHandWinner(result.handWinner);
    });
  };

  return (
    <MainContainer>
      <Logo src={logoImg} />
      <PokerForm handleSubmit={handleSubmit} />
      <PokerResult
        handWinner={handWinner}
        handOneDescr={handOneDescr}
        handTwoDescr={handTwoDescr}
      />
    </MainContainer>
  );
};

export default App;
