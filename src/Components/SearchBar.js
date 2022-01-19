import React, { useState } from "react";
import petsData from "../petsData";
import PetItem from "./PetItem";

const SearchBar = ({ search }) => {
  const [query, setQuery] = useState("");

  const typingQuery = (e) => {
    const str = e.target.value;
    setQuery(str);
    search(str);
  };

  return (
    <div class="input-group rounded">
      <input
        type="search"
        class="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
        onChange={typingQuery}
      />
    </div>
  );
};

export default SearchBar;
