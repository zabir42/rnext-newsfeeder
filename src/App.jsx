import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/header/Navbar";
import NewsFeeder from "./components/newsfeed/NewsFeeder";
import { NewsProvider } from "./provider";

export default function App() {
  return (
    <>
      <NewsProvider>
        <Navbar />
        <NewsFeeder />
      </NewsProvider>
      <Footer />
    </>
  );
}
