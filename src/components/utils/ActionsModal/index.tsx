import React from "react";
import "./ActionsModal.scss";

export interface Action {
  text: string;
  onClick: () => void;
  isDestructive?: boolean;
  disable?: boolean;
}

export interface ActionsModalProps {
  description?: string;
  actions: Action[];
  onCloseModal: () => void;
}

const ActionsModal: React.FC<ActionsModalProps> = (props) => {
  const getActions = () => {
    return props.actions.map((action) => (
      <li
        className={`${action.disable ? "disable" : ""} ${action.isDestructive ? "action-destructive" : ""}`}
        onClick={action.onClick}
      >
        {action.text}
      </li>
    ));
  };

  const onContainerClick = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    props.onCloseModal();
  };

  return (
    <div className="action-modal-container" onClick={onContainerClick}>
      <div id="action-modal">
        <ul>
          {props.description && <li className="action-description">{props.description}</li>}
          {getActions()}
        </ul>
        <div onClick={props.onCloseModal}>Cancel</div>
      </div>
    </div>
  );
};

export default ActionsModal;
