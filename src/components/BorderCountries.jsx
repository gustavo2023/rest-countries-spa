import { Link } from "react-router";
import useFetch from "../hooks/useFetch";

function BorderCountries({ borders }) {
  const codes = borders.join(",");
  const url = `https://restcountries.com/v3.1/alpha?codes=${codes}&fields=name,cca3`;

  const { data: borderCountries, loading, error } = useFetch(url);

  return (
    <div className="flex flex-wrap items-center gap-4">
      {loading && <p className="text-black dark:text-white">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading &&
        !error &&
        borderCountries &&
        borderCountries.map((country) => (
          <Link
            to={`/country/${country.cca3}`}
            key={country.cca3}
            className="text-sm bg-white dark:bg-blue-900 text-grey-950 dark:text-white font-light shadow-sm rounded-xs px-8 py-2 cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            {country.name.common}
          </Link>
        ))}
    </div>
  );
}

export default BorderCountries;
