import React from "react";

import './Phone.scss'
import coque from '../../assets/coque.png'
import styled from "styled-components";

import background from '../../assets/backgrounds/001.png'
import { HeaderBar } from "./HeaderBar";
import { BottomAppNavigator } from "./BottomAppNavigator";
import { AppScreen } from "../app/appscreen";

const PhoneCoque = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    z-index: 99;
    
    width: 100%;
    height: 100%;

    background-size: cover;
    background-image: url(${coque});
`

export const Phone: React.FC = () => {
    return (
        <div className="phone-container">
            <PhoneCoque />
            <div className="test-bg"/>

            <div className="phone-content" style={{ backgroundImage: `url(${background})` }}>
                <HeaderBar />
                <AppScreen />
                <BottomAppNavigator />
            </div>
        </div>
    )
};

