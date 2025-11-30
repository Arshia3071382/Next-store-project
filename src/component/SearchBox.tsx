"use client"

import { useState } from "react";

interface SearchBoxProps {
  onSearch: (searchText: string) => void;
}

function SearchBox({ onSearch }: SearchBoxProps) {
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchText);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    setSearchText(value);
    onSearch(searchText); 
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-row-reverse justify-center items-center rounded-xl shadow-2xl mb-5 w-1/2 mx-auto">
      <input 
        className="p-3 outline-none flex-1 rounded-r-xl border border-gray-300"
        type="text" 
        placeholder="Search..." 
        value={searchText}
        onChange={handleChange}
      />
      <button 
        type="submit"
        className="bg-sky-700 hover:bg-sky-600 px-6 py-3 text-white rounded-l-xl"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBox;