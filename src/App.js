import React, { useState } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Project from "./components/Project";
import Footer from "./components/Footer";

function App() {
  const [selectedTab, setSelectedTab] = useState("aboutMe");

  return (
    <div>
      <Nav setSelectedTab={setSelectedTab}></Nav>
      <main>
        {selectedTab==='aboutMe' && <Header />}
        {selectedTab==='portfolio' && <Project />}
        {/* {<Resume />} */}
      </main>
        <Footer />
    </div>
  );
}

export default App;
