import { useParams, Link } from "react-router";
import useFetch from "../hooks/useFetch";
import BorderCountries from "../components/BorderCountries";

function CountryDetails() {
  const { countryId } = useParams();

  const {
    data: countryData,
    loading,
    error,
  } = useFetch(`https://restcountries.com/v3.1/alpha/${countryId}`);

  const country = countryData ? countryData[0] : null;

  return (
    <div className="flex flex-col gap-12 md:gap-14 py-10 px-6 md:py-14 md:px-16">
      <Link
        to="/"
        className="w-26 h-8 flex items-center justify-center gap-2 py-5 text-grey-950 dark:text-white bg-white dark:bg-blue-900 shadow-card rounded-xs"
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="14"
            viewBox="0 0 22 14"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.93514 -3.00997e-06L8.32216 1.32582L3.745 5.70104L21.2214 5.70104L21.2214 7.5572L3.745 7.5572L8.32216 11.9324L6.93514 13.2582L5.55931e-05 6.62912L6.93514 -3.00997e-06Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <span className="text-sm font-light">Back</span>
      </Link>

      <div>
        {loading && (
          <p className="text-center text-black dark:text-white text-4xl mt-8">
            Loading...
          </p>
        )}
        {error && (
          <p className="text-center text-4xl mt-8 text-red-500">{error}</p>
        )}
        {!loading && !error && country && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-md overflow-hidden">
              <img
                src={country.flags.png}
                alt={country.flags.alt}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl md:text-[2rem] text-grey-950 dark:text-white font-extrabold mb-4 md:mb-8">
                {country.name.common}
              </h2>

              {/* Country Details Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 mb-8 md:mb-6 lg:mb-16 text-grey-950 text-sm md:text-base dark:text-white font-semibold">
                <div className="flex flex-col gap-2">
                  <p>
                    Native Name:{" "}
                    <span className="font-light">
                      {country.name.nativeName
                        ? Object.values(country.name.nativeName)[0].official
                        : country.name.common}
                    </span>
                  </p>
                  <p>
                    Population:{" "}
                    <span className="font-light">
                      {country.population.toLocaleString()}
                    </span>
                  </p>
                  <p>
                    Region: <span className="font-light">{country.region}</span>
                  </p>
                  <p>
                    Sub Region:{" "}
                    <span className="font-light">{country.subregion}</span>
                  </p>
                  <p>
                    Capital:{" "}
                    <span className="font-light">
                      {country.capital.join(", ")}
                    </span>
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <p>
                    Top Level Domain:{" "}
                    <span className="font-light">{country.tld.join(", ")}</span>
                  </p>
                  <p>
                    Currencies:{" "}
                    <span className="font-light">
                      {Object.values(country.currencies)
                        .map((currency) => currency.name)
                        .join(", ")}
                    </span>
                  </p>
                  <p>
                    Languages:{" "}
                    <span className="font-light">
                      {Object.values(country.languages).join(", ")}
                    </span>
                  </p>
                </div>
              </div>

              {/* Border Countries Section */}
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <p className="text-grey-950 dark:text-white font-semibold">
                  Border Countries:
                </p>
                <div>
                  {country.borders && country.borders.length > 0 ? (
                    <BorderCountries borders={country.borders} />
                  ) : (
                    <span className="text-grey-950 dark:text-white font-light">
                      N/A
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CountryDetails;
