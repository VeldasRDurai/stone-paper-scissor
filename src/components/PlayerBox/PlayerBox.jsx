import React from "react";
import styled from "styled-components";

const Div = styled.div`
    background-color:#14bdac;
    height:60vh;
    width :60vh;
    box-sizing:border-box;
    border: 10px solid #0da192;
    display:flex;
    flex-direction:column;
`;

const PlayerBox = () => {
    return (
        <Div>
            PlayerBox
        </Div>
    );
}

export default PlayerBox;