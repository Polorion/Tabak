import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import React from "react";
import HeaderContainer from "./components/Header/HeaderContainer";

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <div className={"container"}>
        <Body />
      </div>
      <Footer />
    </div>
  );
}

export default App;
