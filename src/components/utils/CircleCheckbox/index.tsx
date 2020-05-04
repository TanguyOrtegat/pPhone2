import React from "react";
import { ReactSVG } from "react-svg";

import "./CircleCheckbox.scss";
import CircleEmptyIcon from '../../../assets/icons/circle-empty.svg';
import CircleCheckedIcon from '../../../assets/icons/circle-checked.svg';

const CircleCheckbox: React.FC<{ checked: boolean }> = props => {
    if (props.checked) {
        return <ReactSVG className="circle-checkbox selected" src={CircleCheckedIcon} />;
    }
    return <ReactSVG className="circle-checkbox" src={CircleEmptyIcon} />;
}

export default CircleCheckbox;