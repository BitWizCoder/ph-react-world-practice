import Country from "./Country";

export default function Countries({ countries }) {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4">
        Traveling Countries: {countries.length}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {countries.map((country, index) => (
          <Country key={index} country={country} />
        ))}
      </div>
    </div>
  );
}
