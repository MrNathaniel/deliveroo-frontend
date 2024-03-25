import React, { useState, useEffect } from "react";
import axios from "axios";
import logoText from "./assets/images/logo-text.svg";

import "./App.css";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://site--backend-deliverro--8sfkwdwcfpw4.code.run/"
      );
      console.log(response.data);

      setData(response.data);

      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      <header className="header">
        <img src={logoText} alt="Logo-text" />
      </header>
      <p>{isLoading === true ? "chargement..." : data.Ratings[0].source}</p>;
    </>
  );
}

export default App;
