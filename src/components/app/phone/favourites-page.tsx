import React, { useState } from "react";
import ActionModal, { ActionsModalProps } from "../../utils/ActionsModal";
import HeaderApp from "../../utils/HeaderApp";

import "./Phone.scss";

import LtdPhoto from "../../../assets/contacts-photo/ltd.png";
import EmsPhoto from "../../../assets/contacts-photo/ems.png";
import TaxiPhoto from "../../../assets/contacts-photo/taxi.png";
import GaragePhoto from "../../../assets/contacts-photo/garage.png";
import PolicePhoto from "../../../assets/contacts-photo/police.png";


interface FavouriteContact {
  id: number;
  name: string;
  photo: string;
  number: number;
}

const defaultFavourites: FavouriteContact[] = [
  { id: 1, name: "Police", photo: PolicePhoto, number: 911 },
  { id: 2, name: "Ambulance", photo: EmsPhoto, number: 555 },
  { id: 3, name: "Taxi", photo: TaxiPhoto, number: 555 },
  { id: 4, name: "Garage", photo: GaragePhoto, number: 555 },
  { id: 5, name: "LTD", photo: LtdPhoto, number: 555 },
];

const FavouritesPage: React.FC = () => {
  const [state, setState] = useState<{ actionContact?: FavouriteContact }>({});

  const clearState = () => setState({});

  const getActions = (): ActionsModalProps => {
    return {
      actions: [
        { text: "Call", onClick: clearState },
        { text: "Send message", onClick: clearState },
      ],
      onCloseModal: clearState,
      description: state.actionContact ? state.actionContact.name : "",
    };
  };

  const getFavourites = () =>
    defaultFavourites.map((fav) => (
      <li key={fav.id} onClick={() => setState({ actionContact: fav })}>
        <img src={fav.photo} alt={fav.name} />
        <h2>{fav.name}</h2>
      </li>
    ));

  return (
    <div id="favourites-page">
      {state.actionContact && <ActionModal {...getActions()} />}
      <HeaderApp leftPlusIcon={true} title="Favourites" />
      <ul className="list-view">{getFavourites()}</ul>
    </div>
  );
};

export default FavouritesPage;
