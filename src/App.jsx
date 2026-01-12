import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import CountryDetails from "./pages/CountryDetails";
import Header from "./components/Header";

function App() {
  return (
    <div className="font-nunito-sans dark:bg-blue-950">
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/country/:countryId" element={<CountryDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
