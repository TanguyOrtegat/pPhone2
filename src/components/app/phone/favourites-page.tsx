import React from 'react';
import './Phone.scss';
import PlusIcon from '../../../assets/icons/plus.svg';
import { ReactSVG } from 'react-svg';

const FavouritesPage: React.FC = () => {
    return (
        <div id="favourites-page">
            <div className="header border-bottom">
                <div className="header-left">
                    <ReactSVG src={PlusIcon} className="plus-icon" />
                </div>
                <div className="header-middle">
                    Favourites
                </div>
                <div className="header-right"></div>
            </div>
            <div className="favourites-container">
                No Favourites
            </div>
        </div>
    );
};

export default FavouritesPage;