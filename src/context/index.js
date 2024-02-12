import { createContext, useContext } from "react";

const NewsContext = createContext("");

const useNewsContext = () => useContext(NewsContext);

export { NewsContext, useNewsContext };

