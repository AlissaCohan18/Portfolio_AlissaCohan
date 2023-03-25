import React, { useState } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  const [selectedTab, setSelectedTab] = useState("aboutMe");

  return (
    <div>
      <Nav setSelectedTab={setSelectedTab}></Nav>
      <main>
        {selectedTab==='aboutMe' && <Header />}
        {selectedTab==='portfolio' && <Portfolio />}
        {selectedTab==='contact' && <Contact />}
        {selectedTab==='resume' && <Resume />}
      </main>
        <Footer />
    </div>
  );
}

export default App;
