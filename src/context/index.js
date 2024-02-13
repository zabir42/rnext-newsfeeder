import { createContext, useContext } from "react";

const NewsContext = createContext("");
const SearchContext = createContext("");

const useNewsContext = () => useContext(NewsContext);
const useSearchContext = () => useContext(SearchContext);

export { NewsContext, SearchContext, useNewsContext, useSearchContext };

