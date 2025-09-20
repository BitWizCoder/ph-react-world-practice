import Country from "./Country";

export default function Countries({ countries }) {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4">
        Traveling Countries: {countries.length}
      </h1>
      <div>
        {countries.map((country, index) => (
          <Country key={index} country={country} />
        ))}
      </div>
    </div>
  );
}
