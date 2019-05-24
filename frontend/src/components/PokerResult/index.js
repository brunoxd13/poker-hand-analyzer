import React from "react";
import Label from "../Label";

const PokerResult = ({ handWinner, handOneDescr, handTwoDescr }) => (
  <>
    <Label>
      {handWinner > 0 &&
        (handWinner > 2
          ? `The no winner is a tie`
          : `The hand winner is: ${handWinner}`)}
    </Label>
    <Label>{handOneDescr && `The hand one is: ${handOneDescr}`}</Label>
    <Label>{handTwoDescr && `The hand two is: ${handTwoDescr}`}</Label>
  </>
);

export default PokerResult;
