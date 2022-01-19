import { getSuggestedQuery } from "@testing-library/react";
import React, { useState } from "react";
import PetItem from "./PetItem";
import SearchBar from "./SearchBar";

export default function PetsList({ pets }) {
  const [petsFeltered, setPetsFeltered] = useState(pets);
  const [type, setType] = useState("");

  const search = (query) => {
    setPetsFeltered(
      pets.filter((pet) => pet.name.toLowerCase().includes(query.toLowerCase()))
    );
  };
  const changePetSelctor = (event) => {
    setType(event.target.value);
  };

  return (
    <section id="doctors" class="doctor-section pt-140">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xxl-5 col-xl-6 col-lg-7">
            <div class="section-title text-center mb-30">
              <h1 class="mb-25 wow fadeInUp" data-wow-delay=".2s">
                Fur-ends
              </h1>
              <SearchBar search={search} />
              <br />
              Type:
              <select onChange={changePetSelctor} class="form-select">
                <option value="" selected>
                  All
                </option>
                <option value="Cat">Cat</option>
                <option value="Dog">Dog</option>
                <option value="Rabbit">Rabbit</option>
              </select>
            </div>
          </div>
        </div>

        <div class="row justify-content-center">
          {petsFeltered
            .filter((pet) => pet.type.includes(type))
            .map((pet) => (
              <PetItem key={pet.id} pet={pet} />
            ))}
        </div>
      </div>
    </section>
  );
}
