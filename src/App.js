import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import React from "react";

function App() {
  return (
    <div className="App">
      <Header />
      <div className={"container"}>
        <Body />
      </div>
      <Footer />
    </div>
  );
}

export default App;
