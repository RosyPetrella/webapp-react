import { createContext, useContext, useState } from "react";
import Loader from "./components/Loader";

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  const showLoader = () => setIsLoading(true);
  const hideLoader = () => setIsLoading(false);

  return (
    <GlobalContext.Provider value={{ showLoader, hideLoader }}>
      {children}
      {isLoading && <Loader />}
    </GlobalContext.Provider>
  );
}

export function useLoader() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useLoader must be used within a LoaderProvider");
  }
  return context;
}
