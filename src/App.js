import React, { useState } from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import jsonData from "./data/professionals.json";
import logo from "./logo.svg"
import "./App.css";

function App() {
  const jdata = jsonData.professionals;
  
  const [activeCategory, setActiveCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const filteredData = activeCategory === "All" ? jdata : jdata.filter(item => item.category === activeCategory);

  return (
    <div className="App">
      <nav class="navbar bg-body-tertiary">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <form class="d-flex" role="search">
            <img src={logo} className="card-img-top" alt="..." />
          </form>
      </nav>

      <div className="container mt-5">
        <div className="d-flex justify-content-start mb-4">
          <button type="button" className={`btn ms-3 ${activeCategory === "All" ? "btn-success" : "btn-primary"}`} onClick={() => handleCategoryClick("All")}> All </button>

          <button type="button" className={`btn ms-3 ${activeCategory === "Clinical Psychologist" ? "btn-success" : "btn-primary"}`} onClick={() => handleCategoryClick("Clinical Psychologist")}>  Clinical Psychologist </button>

          <button type="button" className={`btn ms-3 ${activeCategory === "Psychiatrist" ? "btn-success" : "btn-primary"}`} onClick={() => handleCategoryClick("Psychiatrist")}>  Psychiatrist </button>

          <button type="button" className={`btn ms-3 ${activeCategory === "Family Therapist" ? "btn-success" : "btn-primary"}`} onClick={() => handleCategoryClick("Family Therapist")}> Family Therapist </button>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          {filteredData.map((index) => {
            return (
              <div className="col" key={index.id}>
                <div className="card">
                  <img src={require(`${index.img_url}`)}  />
                  <div className="card-body">
                    <h5 className="card-title">{index.name}</h5>
                    <p className="card-text">{index.qualification}</p>
                    <button type="button" className="btn btn-dark rounded-pill w-50">{index.session_price} | Book Now </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
