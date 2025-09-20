export default function Country({ country }) {
  return (
    <div className="flex flex-col gap-4 border border-amber-300 p-4 rounded-sm">
      <p>
        <span className="font-bold">Name: </span>
        {country.name.common}
      </p>
      <img src={country.flags.png} alt="" />
      <p>
        <span className="font-bold">Independent: </span>
        {country.independent ? "Free" : "Not Free"}
      </p>
      <button className="bg-gray-400 py-2 w-22 rounded-sm cursor-pointer">
        Visited
      </button>
    </div>
  );
}
