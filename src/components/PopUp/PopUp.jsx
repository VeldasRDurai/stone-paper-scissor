import React from "react";
import styled from "styled-components";

import NavElement from "./NavElement/NavElement";

const Div  = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:90vh;
    width:100vw;
`;
const Div2 = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    height:35vh;
    width: 56vh;
    border: 10px double black;
    background-color: #00a800;
    box-sizing: border-box;
    #button{    
        border:none;
        padding:5px 15px;
        color:#fff;
        background-color:#800000;
        box-shadow: 5px 5px 0px 0px #000;
        cursor:pointer;
        :hover { 
            box-shadow: 2px 2px 0px 0px #000; 
        }
    }
    & > div {
        text-align:center;
    }
`;
const Div3 = styled.div`
    color:#800000;
`;
const Div4 = styled.div`
    font-family: "Kelly Slab", cursive;
    font-weight:900;
    font-size:15px;
`;

const PopUp = ({ target , setTarget , setShowPopUp , resultMode , setResultMode , gameOver , setGameOver }) => {
    const newGame = () => {
        setGameOver(false);
        setResultMode({ 
            value : false , 
            score : [0,0] ,
            user  : undefined ,
            computer: undefined ,
            result: undefined
          });
    }
    return(
        <Div>
            {
                gameOver ?
                <Div2>
                    {
                        resultMode.score[0] > resultMode.score[1] ?
                           <div> "YOU WON THE GAME"</div> : <div>"COMPUTER WON THE GAME"</div>
                    }
                    <div>GAME OVER</div>
                    <div id="button" onClick={ newGame } >NEWGAME</div>   
                </Div2>:
                <Div2>
                    <Div3>Choose the target score</Div3>
                    <NavElement target={target} setTarget={setTarget} setShowPopUp={setShowPopUp} />
                    <div id="button" onClick={() => setShowPopUp(false) } >OK</div>
                    <Div4>
                        <div> Version 1.0</div>
                        <div>Copyright (C) 2021 by</div>
                        <div>Ramesh Exploida , Global Inc.</div>
                    </Div4>
                </Div2> 
            }
        </Div>
    );
}

export default PopUp;