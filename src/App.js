import React from "react";
import styled from "styled-components";

import Head from "./components/Head/Head"
import PlayerBox from "./components/PlayerBox/PlayerBox";
import ComputerBox from "./components/ComputerBox/ComputerBox";
import { useState } from "react";

const Div = styled.div`
  height:90vh;
  width:100vw;
  display:flex;
  justify-content:space-evenly;
  align-items:center;
  color:white;
`;

const App = () => {
  // const [ score , setScore ] = useState( [ 0 , 0 ] );
  const [resultMode , setResultMode] = useState({ 
    value : false , 
    score : [0,0] ,
    user  : undefined ,
    computer: undefined ,
    result: undefined
  });

  const validator = ( selectedKey ) => {
    var computerKey = ["STONE","PAPER","SCISSOR"][Math.floor((Math.random() * 3))];
    // console.log("User : " + selectedKey + " \nComputer : " + computerKey);
    computerKey === selectedKey &&  setResultMode({ value:true , result:"DRAW" , user:selectedKey , computer:computerKey , score:resultMode.score });
    if(computerKey === "STONE"){
      selectedKey === "PAPER" ?     setResultMode({ value:true , result:"PASS" , user:selectedKey , computer:computerKey , score:[ resultMode.score[0]+1 , resultMode.score[1] ] }) :
        selectedKey === "SCISSOR" ? setResultMode({ value:true , result:"FAIL" , user:selectedKey , computer:computerKey , score:[ resultMode.score[0] , resultMode.score[1]+1 ] }) :
          console.log("") ;
    } else if(computerKey === "PAPER"){
      selectedKey === "SCISSOR" ?   setResultMode({ value:true , result:"PASS" , user:selectedKey , computer:computerKey , score:[ resultMode.score[0]+1 , resultMode.score[1] ] }) :
        selectedKey === "STONE" ?   setResultMode({ value:true , result:"FAIL" , user:selectedKey , computer:computerKey , score:[ resultMode.score[0] , resultMode.score[1]+1 ] }) :
          console.log("");
    } else {
      selectedKey === "STONE" ?     setResultMode({ value:true , result:"PASS" , user:selectedKey , computer:computerKey , score:[ resultMode.score[0]+1 , resultMode.score[1] ] }) :
        selectedKey === "PAPER" ?   setResultMode({ value:true , result:"FAIL" , user:selectedKey , computer:computerKey , score:[ resultMode.score[0] , resultMode.score[1]+1 ] }) :
          console.log("");
    }
  }  
  
return ( 
    <div onClick={ () => resultMode.value === true && 
        setResultMode({ value:false , result:resultMode.result , user:resultMode.user , computer:resultMode.computer , score:resultMode.score} )}> 
      <Head score={resultMode.score} />
      <Div> 
        <PlayerBox   resultMode={resultMode} validator={validator} />
        <ComputerBox resultMode={resultMode} />
      </Div>
    </div>
  )
}

export default App;