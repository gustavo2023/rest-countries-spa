import { useState } from "react";
import useFetch from "../hooks/useFetch";
import CountryCard from "../components/CountryCard";
import SearchBar from "../components/SearchBar";

function HomePage() {
  const [searchCountry, setSearchCountry] = useState("");

  const {
    data: countries,
    loading,
    error,
  } = useFetch(
    "https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital"
  );

  const filteredCountries = countries?.filter((country) =>
    country.name.common
      .toLowerCase()
      .includes(searchCountry.toLowerCase())
  );

  return (
    <div className="p-10">
      <div className="mb-10">
        <SearchBar searchCountry={searchCountry} onSearch={setSearchCountry} />
      </div>

      {loading && <p className="text-center text-2xl mt-8">Loading...</p>}
      {error && (
        <p className="text-center text-2xl mt-8 text-red-500">{error}</p>
      )}

      {!loading && !error && countries && (
        <ul className="p-4 md:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-14">
          {filteredCountries.map((country) => (
            <li key={country.name.common}>
              <CountryCard country={country} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default HomePage;
