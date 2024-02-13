import Footer from "./components/Footer";
import Navbar from "./components/header/Navbar";
import NewsFeeder from "./components/newsfeed/NewsFeeder";
import { NewsProvider, SearchProvider } from "./provider";

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
