import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <div>
      <h1>Search results below: </h1>
      <ul className="list-group search-results">
        {props.results.map((result) => (
          <li key={result} className="list-group-item">
            <img alt="Dog" src={result} className="img-fluid" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResults;
