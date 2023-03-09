import React, { useState } from "react";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(`You searched for: ${searchTerm}`);
  };

  return (
    <div>
      <Container style={{ minHeight: "80%" }}>
        <h1 className="text-center">Search By Breed!</h1>
        <SearchForm
          search={searchTerm}
          breeds={[]}
          handleFormSubmit={handleFormSubmit}
          handleInputChange={handleInputChange}
        />
        <SearchResults results={searchResults} />
      </Container>
    </div>
  );
}

export default Search;
