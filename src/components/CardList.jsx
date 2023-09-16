/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";
import Card from "./Card";
import { Link } from "react-router-dom";
import "../styles/CardList.css";

const CardList = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <div className="card-list-container">
      {state.data.map((user) => (
        <Card
          key={user.id}
          link={<Link to={`/dentist/${user.id}`}>{user.name}</Link>}
          name={user.name}
          id={user.id}
          username={user.username}
        />
      ))}
    </div>
  );
};

export default CardList;


