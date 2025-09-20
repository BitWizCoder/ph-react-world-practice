import { useState } from "react";
import Countries from "./components/Countries";
import { useEffect } from "react";

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,flags,independent"
        );
        const data = await res.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  if (loading) return <h2>Loading...</h2>;

  return (
    <div className="max-w-7xl m-auto px-12 mt-16">
      <Countries countries={countries} />
    </div>
  );
}

export default App;
