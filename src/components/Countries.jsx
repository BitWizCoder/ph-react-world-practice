import { useState } from "react";
import Country from "./Country";

export default function Countries({ countries }) {
  const [visitedCountriesFlags, setVisitedCountriesFlags] = useState([]);

  const handleVisitedFlags = (flag) => {
    const newFlag = [...visitedCountriesFlags, flag];

    setVisitedCountriesFlags(newFlag);
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4">
        Traveling Countries: {countries.length}
      </h1>

      <div className="flex gap-3 mb-3 flex-wrap">
        {visitedCountriesFlags.map((flag, index) => (
          <img className="w-40" key={index} src={flag}></img>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {countries.map((country, index) => (
          <Country
            key={index}
            country={country}
            handleVisitedFlags={handleVisitedFlags}
          />
        ))}
      </div>
    </div>
  );
}
