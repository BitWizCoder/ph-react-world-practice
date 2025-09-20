export default function Country({ country }) {
  return (
    <div>
      <p>
        <span className="font-bold">Name: </span>
        {country.name.common}
      </p>
      <img src={country.flags.png} alt="" />
      <p>
        <span className="font-bold">Independent: </span>
        {country.independent ? "Free" : "Not Free"}
      </p>
    </div>
  );
}
