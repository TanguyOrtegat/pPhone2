import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import "./Messages.scss";

export interface IMessage {
  text: string;
  date: Date;
  receiver?: boolean;
}

const messages: IMessage[] = [
  {
    text: "Hey! Have any good song suggestions?",
    date: new Date(),
    receiver: true
  },
  {
    text: "Yeah! I'm updating my playlist. Here's a good one...",
    date: new Date()
  },
  { text: "Salut bro!", date: new Date() },
  { text: "Salut bro!", date: new Date() },
  { text: "Salut bro!", date: new Date() },
  { text: "Salut bro!", date: new Date() },
  { text: "Salut bro!", date: new Date() },
  { text: "Salut bro!", date: new Date() },
  { text: "Salut bro!", date: new Date() },
  { text: "Salut bro!", date: new Date() },
  { text: "Salut bro!", date: new Date() },
  { text: "Salut bro!", date: new Date() },
  { text: "Salut bro!", date: new Date() },
  { text: "Salut bro!", date: new Date() }
];

export const MessagePage: React.FC = () => {
  let { id } = useParams();

  const getMessages = () => {
    const elements = messages.map((msg, id) => {
      return (
        <div
          key={id}
          className={`message-bubble-container ${msg.receiver ? "from" : "to"}`}
        >
          <div className={`message-bubble ${msg.receiver ? "from" : "to"}`}>
            {msg.text}
          </div>
        </div>
      );
    });
    return elements;
  };

  return (
    <div className="messages-wrapper">
      <div className="messages-container">
        {getMessages()}
      </div>
      <div className="send-container">
        <label>
          <input
            type="text"
            onChange={() => {}}
            id="msgInput"
            className="send-input"
            placeholder="Entrez votre message"
          />
        </label>
        <input
          type="submit"
          onClick={() => {}}
          className="send-btn"
          value="Envoyer"
        />
      </div>
    </div>
  );
};
