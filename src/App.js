import React from "react";
import styled from "styled-components";

import PlayerBox from "./components/PlayerBox/PlayerBox";
// import ComputerBox from "./components/ComputerBox/ComputerBox";

const Div = styled.div`
  height:90vh;
  width:100vw;
  display:flex;
  justify-content:space-evenly;
  align-items:center;
  color:white;
`;
const Head = styled.div`
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

const App = () => {
  return <> 
    <Head>
      <div>STONE PAPER SCISSOR</div>
      <div>SCORE: 0 - 0</div>
    </Head>
    <Div> 
      <PlayerBox />
      <PlayerBox />
      {/* <ComputerBox /> */}
    </Div>
  </>
}

export default App;