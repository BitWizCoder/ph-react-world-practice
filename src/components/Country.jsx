import { useState } from "react";

export default function Country({ country, handleVisitedFlags }) {
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div
      className={`flex flex-col gap-4 border border-amber-300 p-4 rounded-sm ${
        visited && "bg-amber-50"
      }`}
    >
      <p>
        <span className="font-bold">Name: </span>
        {country.name.common}
      </p>
      <img src={country.flags.png} alt="" />
      <p>
        <span className="font-bold">Independent: </span>
        {country.independent ? "Free" : "Not Free"}
      </p>
      <button
        className="bg-gray-600 hover:bg-gray-500 text-white py-2 w-24 rounded-sm cursor-pointer"
        onClick={handleVisited}
      >
        {visited ? "Visited" : "Not Visited"}
      </button>
      <button
        onClick={() => {
          handleVisitedFlags(country.flags.png);
        }}
        className="bg-gray-600 hover:bg-gray-500 text-white py-2 w-24 rounded-sm cursor-pointer"
      >
        Add Visited Flag
      </button>
    </div>
  );
}
