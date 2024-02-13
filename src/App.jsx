import Footer from "./components/Footer";
import Navbar from "./components/header/Navbar";
import NewsFeeder from "./components/newsfeed/NewsFeeder";
import { NewsProvider } from "./provider";
import SearchProvider from "./provider/SearchProvider";

export default function App() {
  return (
    <>
      <NewsProvider>
        <SearchProvider>
          <Navbar />
          <NewsFeeder />
        </SearchProvider>
      </NewsProvider>

      <Footer />
    </>
  );
}
