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
      <body>
        <div>
          {isLoading === true ? (
            <p>"chargement..."</p>
          ) : (
            <>
              <header className="header">
                <img src={logoText} alt="Logo-text" />
              </header>
              <section className="Le-pain-quotidien">
                <div className="Left-bloc">
                  <h1>{data.restaurant.name}</h1>
                  <p>{data.restaurant.description}</p>
                </div>
                <div className="picture">
                  <img src={data.restaurant.picture} />
                </div>
              </section>
              <main>
                <div>
                  {data.categories.map((category) => {})}
                  return ({category.name})
                </div>
              </main>
            </>
          )}
        </div>
        ;
      </body>
    </>
  );
}

export default App;
