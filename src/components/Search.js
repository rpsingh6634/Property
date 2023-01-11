import React, { useContext } from "react";
import Country from "./Country";
import Property from "./Property";
import PriceRange from "./PriceRange";
import Dashboard from "./Dashboard";
import { RiSearch2Line } from "react-icons/ri";
import { HouseContext } from "./HouseContext";

const Search = () => {
  const { handleClick } = useContext(HouseContext);
  return (
    <div className="search px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur rounded-lg">
      <Country />
      <Property />
      <PriceRange />
      <Dashboard />
      <button
        onClick={() => handleClick()}
        className="bg-blue-700 hover:bg-blue-800 transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg"
      >
        <RiSearch2Line />
      </button>
    </div>
  );
};

export default Search;