import { Link } from "react-router";

function CountryCard({ country }) {
  return (
    <Link to={`/country/${country.cca3}`}>
      <article className="bg-white dark:bg-blue-900 flex flex-col h-full shadow-card rounded-(--rounded-card) overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300">
        <div className="h-40">
          <img
            src={country.flags.png}
            alt={country.flags.alt}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="flex flex-col gap-4 p-6 mb-10 text-grey-950 dark:text-white">
          <h2 className="text-lg font-extrabold">{country.name.common}</h2>
          <div className="flex flex-col gap-2 text-sm">
            <p>
              <span className="font-semibold">Population: </span>
              {country.population.toLocaleString()}
            </p>
            <p>
              <span className="font-semibold">Region: </span>
              {country.region}
            </p>
            <p>
              <span className="font-semibold">Capital: </span>
              {country.capital?.[0] || "N/A"}
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default CountryCard;
