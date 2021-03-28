import React from "react";
import styled from "styled-components";

const Div = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  min-height:10vh;
  width:100vw;
  padding:5px;
  box-sizing:border-box;
  color:white;
  & > div:nth-child(1){
    color:yellow;
    font-size:40px;
  }
`;
const Head = ({ score }) => {
  return (
      <Div>
          <div>STONE PAPER SCISSOR</div>
          <div>SCORE: {score[0]} - {score[1]} </div>
      </Div>
  );
}

export default Head;