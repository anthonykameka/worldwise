import { createContext, useState, useEffect, useContext } from "react";

const URL = "http://localhost:9000";

const CityContext = createContext();

const CityProvider = ({ children }) => {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState(null);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${URL}/cities`);
        const data = await response.json();
        setCities(data);
      } catch {
        alert("There was an error loading data ");
      } finally {
        setIsLoading(false);
      }
    };
    fetchCities();
    console.log(cities);
  }, []);

  async function getCity(id) {
    try {
      setIsLoading(true);
      const response = await fetch(`${URL}/cities/${id}`);
      const data = await response.json();
      setCurrentCity(data);
    } catch {
      alert("There was an error loading data ");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CityContext.Provider value={{ cities, isLoading, currentCity, getCity }}>
      {children}
    </CityContext.Provider>
  );
};

const useCities = () => {
  const context = useContext(CityContext);
  if (context === undefined) {
    throw new Error("useCities must be used within a CityProvider");
  }
  return context;
};

export { CityProvider, useCities };
