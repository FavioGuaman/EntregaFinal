import React, { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context.jsx";
import "../styles/Dark.css"; 
import CardList from "../Components/CardList.jsx"; 

const Home = () => {
  const { theme } = useContext(ContextGlobal);

  return (
    <main className={theme === "dark" ? "dark-mode" : ""}>
      <h1>Home</h1>
      <div className="card-grid">
        <CardList />
      </div>
    </main>
  );
};

export default Home;
