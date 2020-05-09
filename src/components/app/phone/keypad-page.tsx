import React, { useState } from "react";
import './Phone.scss';
import GridIcon from "../../../assets/icons/grid.svg";
import PhoneIcon from "../../../assets/icons/phone-fill.svg";
import DeleteIcon from "../../../assets/icons/delete-left.svg";
import { ReactSVG } from "react-svg";

const KeypadPage: React.FC = () => {

    const [number, setNumber] = useState('');

    const numberMaxLength = 8;

    const keyPressed = (key: string) => number.length < numberMaxLength && setNumber(number + key);
    const deletePressed = () => number.length > 0 && setNumber(number.substr(0, number.length - 1));

    return (
        <div id="keypad-page">
            <div className="keypad-header">
                <h2 className="keypad-number">{number}</h2>
            </div>
            <div>
                <div className="keypad-row">
                    <div className="keypad-btn" onClick={() => keyPressed("1")}>1</div>
                    <div className="keypad-btn" onClick={() => keyPressed("2")}>2<div className="keypad-letters">A B C</div></div>
                    <div className="keypad-btn" onClick={() => keyPressed("3")}>3<div className="keypad-letters">D E F</div></div>
                </div>
                <div className="keypad-row">
                    <div className="keypad-btn" onClick={() => keyPressed("4")}>4<div className="keypad-letters">G H I</div></div>
                    <div className="keypad-btn" onClick={() => keyPressed("5")}>5<div className="keypad-letters">J K L</div></div>
                    <div className="keypad-btn" onClick={() => keyPressed("6")}>6<div className="keypad-letters">M N O</div></div>
                </div>
                <div className="keypad-row">
                    <div className="keypad-btn" onClick={() => keyPressed("7")}>7<div className="keypad-letters">P Q R S</div></div>
                    <div className="keypad-btn" onClick={() => keyPressed("8")}>8<div className="keypad-letters">T U V</div></div>
                    <div className="keypad-btn" onClick={() => keyPressed("9")}>9<div className="keypad-letters">W X Y Z</div></div>
                </div>
                <div className="keypad-row">
                    <div id="asterisk" className="keypad-btn">*</div>
                    <div className="keypad-btn" onClick={() => keyPressed("0")}>0<div id="plus">+</div></div>
                    <div className="keypad-btn">
                        <ReactSVG id="sharp-icon" src={GridIcon} />
                    </div>
                </div>
                <div className="keypad-row">
                    <div id="call-btn" className="keypad-btn">
                        <ReactSVG id="call-icon" src={PhoneIcon} />
                    </div>
                    <div id="keypad-delete" onClick={deletePressed}>
                        {number.length > 0 && <ReactSVG id="delete-icon" src={DeleteIcon} />}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default KeypadPage;