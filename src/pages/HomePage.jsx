import useFetch from "../hooks/useFetch";
import CountryCard from "../components/CountryCard";

function HomePage() {
  const {
    data: countries,
    loading,
    error,
  } = useFetch(
    "https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital"
  );

  return (
    <div className="p-8">
      {loading && <p className="text-center mt-8">Loading...</p>}
      {error && <p className="text-center mt-8 text-red-500">{error}</p>}

      {!loading && !error && countries && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-14">
          {countries.map((country) => (
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
