import React , { useState } from "react";
import styled from "styled-components";

import DropDown from "./DropDown";

const Div = styled.div`
    font-size:16px;    
    padding:0px 10px;
    cursor:pointer;
    #default {    
        padding:5px 15px;
        color:black;
        background-color:#aaaaaa;
        border:1px solid #000000;
    }
    :hover{
        background-color:#00a800;
    }
`;

const NavElement = ({ target , setTarget }) => {
    const [ showDropdown , setShowDropdown ] = useState(false);
    return(
        <Div onMouseEnter={ () => setShowDropdown(true) } 
            onMouseLeave={ () => setShowDropdown(false) } onClick={ () => setShowDropdown(!showDropdown) }>

            <span id="default" >{ target }</span>
            { showDropdown && 
                <DropDown setTarget={setTarget} setShowDropdown={setShowDropdown} /> }
        </Div>
    );
}

export default NavElement;